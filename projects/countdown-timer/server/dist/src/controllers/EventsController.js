"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conn_1 = __importDefault(require("./../database/conn"));
class EventsController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            // Buscar por evento
            const events = yield conn_1.default('events');
            return response.json(events);
        });
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, address, annotations, } = request.body;
            const date = new Date(request.body.date);
            const event = {
                title,
                description,
                address,
                annotations,
                date: date.getTime(),
                creation_date: Date.now(),
            };
            // Adiciona na tabela Eventos e guarda o ID retornado
            const [event_id] = yield conn_1.default('events').insert(event);
            return response.json(Object.assign({ id: event_id }, event));
        });
    }
}
exports.default = EventsController;
//# sourceMappingURL=EventsController.js.map
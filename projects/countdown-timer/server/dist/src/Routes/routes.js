"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const EventsController_1 = __importDefault(require("./../controllers/EventsController"));
const eventsController = new EventsController_1.default();
router.post('/events', eventsController.create);
router.get('/events', eventsController.index);
exports.default = router;
//# sourceMappingURL=routes.js.map
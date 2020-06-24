"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./Routes/routes"));
const app = express_1.default();
const port = 3333;
app.use(cors_1.default({
    origin: '192.168.0.105',
}));
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(port, err => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=server.js.map
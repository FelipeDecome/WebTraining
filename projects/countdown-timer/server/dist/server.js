"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.post('/', (req, res) => {
    console.log(req);
    res.send('Hello World!');
});
app.listen(port, err => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=server.js.map
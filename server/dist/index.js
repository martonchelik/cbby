"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const getcars_1 = require("./service/getcars");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(process.env.PORT || 4000, () => {
    console.log('Server is running');
});
app.get('/', (req, res) => {
    res.json("This is server side");
});
(0, getcars_1.GetAllAsync)(app);
getcars_1.gets.made(app);
getcars_1.gets.engines(app);
getcars_1.gets.gearboxes(app);
getcars_1.gets.transmissions(app);

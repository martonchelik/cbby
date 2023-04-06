"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
exports.db = mysql2_1.default.createPool({
    host: "us-cdbr-east-06.cleardb.net",
    user: "bbb8438d365f82",
    password: "f38b2f2c",
    database: "heroku_e58ea74e6228d50"
});

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.gets = exports.GetAllAsync = void 0;
const db_1 = require("./db");
const GetAllAsync = (app) => {
    const cars = {};
    const drives = "SELECT drivetype FROM transmissions";
    const made = "SELECT * FROM carbrands";
    const gbs = "SELECT gb FROM gearboxes";
    const eng = "SELECT enginetype FROM enginetypes";
    const bdt = "SELECT bodytype FROM bodytypes";
    app.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield Promise.all([
            new Promise((resolve, reject) => {
                db_1.db.query(made, (err, data) => { err ? reject(err) : resolve(data); });
            }),
            new Promise((resolve, reject) => {
                db_1.db.query(drives, (err, data) => { err ? reject(err) : resolve(data); });
            }),
            new Promise((resolve, reject) => {
                db_1.db.query(gbs, (err, data) => { err ? reject(err) : resolve(data); });
            }),
            new Promise((resolve, reject) => {
                db_1.db.query(eng, (err, data) => { err ? reject(err) : resolve(data); });
            }),
            new Promise((resolve, reject) => {
                db_1.db.query(bdt, (err, data) => { err ? reject(err) : resolve(data); });
            })
        ]).then((values) => {
            cars.brands = values[0];
            cars.trans = values[1];
            cars.gears = values[2];
            cars.engines = values[3];
            cars.bodies = values[4];
            return res.json(cars);
        }).catch((err) => { return res.json(err); });
    }));
};
exports.GetAllAsync = GetAllAsync;
class Gets {
    made(app) {
        app.get('/made', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const made = "SELECT * FROM carbrands";
            yield new Promise((resolve, reject) => {
                db_1.db.query(made, (err, data) => { err ? reject(err) : resolve(data); });
            }).then((data) => { return res.json(data); }).catch((err) => { return res.json(err); });
        }));
    }
    engines(app) {
        app.get('/engines', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const made = "SELECT enginetype FROM enginetypes";
            yield new Promise((resolve, reject) => {
                db_1.db.query(made, (err, data) => { err ? reject(err) : resolve(data); });
            }).then((data) => { return res.json(data); }).catch((err) => { return res.json(err); });
        }));
    }
    gearboxes(app) {
        app.get('/gearboxes', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const made = "SELECT gb FROM gearboxes";
            yield new Promise((resolve, reject) => {
                db_1.db.query(made, (err, data) => { err ? reject(err) : resolve(data); });
            }).then((data) => { return res.json(data); }).catch((err) => { return res.json(err); });
        }));
    }
    transmissions(app) {
        app.get('/transmissions', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const made = "SELECT drivetype FROM transmissions";
            yield new Promise((resolve, reject) => {
                db_1.db.query(made, (err, data) => { err ? reject(err) : resolve(data); });
            }).then((data) => { return res.json(data); }).catch((err) => { return res.json(err); });
        }));
    }
    bodies(app) {
        app.get('/bodies', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const made = "SELECT bodytype FROM carbrands";
            yield new Promise((resolve, reject) => {
                db_1.db.query(made, (err, data) => { err ? reject(err) : resolve(data); });
            }).then((data) => { return res.json(data); }).catch((err) => { return res.json(err); });
        }));
    }
}
exports.gets = new Gets();

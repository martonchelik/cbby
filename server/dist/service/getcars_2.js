"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.car2 = void 0;
const db_1 = require("./db");
class Car2 {
    constructor() {
        this.transmissions = {};
        this.bodies = {};
        this.gears = {};
        this.engines = {};
        this.brands = {};
        this.getAll = (app) => {
            const drives = "SELECT drivetype FROM transmissions";
            const made = "SELECT * FROM carbrands";
            const gbs = "SELECT gb FROM gearboxes";
            const eng = "SELECT enginetype FROM enginetypes";
            const bdt = "SELECT bodytype FROM bodytypes";
            app.get('/search', (req, res) => {
                Promise.all([
                    new Promise((resolve, reject) => {
                        db_1.db.query(made, (err, data) => {
                            err ? reject(err) : resolve(data);
                        });
                    }),
                    new Promise((resolve, reject) => {
                        db_1.db.query(drives, (err, data) => {
                            err ? reject(err) : resolve(data);
                        });
                    }),
                    new Promise((resolve, reject) => {
                        db_1.db.query(gbs, (err, data) => {
                            err ? reject(err) : resolve(data);
                        });
                    }),
                    new Promise((resolve, reject) => {
                        db_1.db.query(eng, (err, data) => {
                            err ? reject(err) : resolve(data);
                        });
                    }),
                    new Promise((resolve, reject) => {
                        db_1.db.query(bdt, (err, data) => {
                            err ? reject(err) : resolve(data);
                        });
                    })
                ]).then((values) => {
                    this.brands = values[0];
                    this.transmissions = values[1];
                    this.gears = values[2];
                    this.engines = values[3];
                    this.bodies = values[4];
                    return res.json(this);
                }).catch((err) => {
                    return res.json(err);
                });
            });
        };
    }
    getMade(app) {
        app.get('/made', (req, res) => {
            res.json(this.brands);
        });
    }
    ;
    getEngines(app) {
        app.get('/engines', (req, res) => {
            res.json(this.engines);
        });
    }
    ;
    getGearboxes(app) {
        app.get('/gearboxes', (req, res) => {
            res.json(this.gears);
        });
    }
    ;
    getTransmissions(app) {
        app.get('/transmissions', (req, res) => {
            res.json(this.transmissions);
        });
    }
    ;
    getBodies(app) {
        app.get('/bodies', (req, res) => {
            res.json(this.bodies);
        });
    }
    ;
}
exports.car2 = new Car2();

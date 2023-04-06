"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.car = void 0;
const db_1 = require("./db");
class Car {
    constructor() {
        this.transmissions = {};
        this.bodies = {};
        this.gears = {};
        this.engines = {};
        this.brands = {};
        this.cars = {};
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
                    this.cars.brands = values[0];
                    this.cars.trans = values[1];
                    this.cars.gears = values[2];
                    this.cars.engines = values[3];
                    this.cars.bodies = values[4];
                    return res.json(this.cars);
                }).catch((err) => {
                    return res.json(err);
                });
            });
        };
    }
    getMade(app) {
        app.get('/made', (req, res) => {
            const made = "SELECT * FROM carbrands";
            new Promise((resolve, reject) => {
                db_1.db.query(made, (err, data) => { err ? reject(err) : resolve(data); });
            }).then((data) => { this.brands.brands = data; return res.json(this.brands); }).catch((err) => { return res.json(err); });
        });
    }
    ;
    getEngines(app) {
        app.get('/engines', (req, res) => {
            const made = "SELECT enginetype FROM enginetypes";
            new Promise((resolve, reject) => {
                db_1.db.query(made, (err, data) => { err ? reject(err) : resolve(data); });
            }).then((data) => { this.engines.engines = data; return res.json(this.engines); }).catch((err) => { return res.json(err); });
        });
    }
    ;
    getGearboxes(app) {
        app.get('/gearboxes', (req, res) => {
            const made = "SELECT gb FROM gearboxes";
            new Promise((resolve, reject) => {
                db_1.db.query(made, (err, data) => { err ? reject(err) : resolve(data); });
            }).then((data) => { this.gears.gears = data; return res.json(this.gears); }).catch((err) => { return res.json(err); });
        });
    }
    ;
    getTransmissions(app) {
        app.get('/transmissions', (req, res) => {
            const made = "SELECT drivetype FROM transmissions";
            new Promise((resolve, reject) => {
                db_1.db.query(made, (err, data) => { err ? reject(err) : resolve(data); });
            }).then((data) => { this.transmissions.trans = data; return res.json(this.transmissions); }).catch((err) => { return res.json(err); });
        });
    }
    ;
    getBodies(app) {
        app.get('/bodies', (req, res) => {
            const made = "SELECT bodytype FROM carbrands";
            new Promise((resolve, reject) => {
                db_1.db.query(made, (err, data) => { err ? reject(err) : resolve(data); });
            }).then((data) => { this.bodies.bodies = data; return res.json(this.bodies); }).catch((err) => { return res.json(err); });
        });
    }
    ;
}
exports.car = new Car();

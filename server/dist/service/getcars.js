"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const db_1 = require("./db");
function Service(app) {
    const cars = {};
    app.get('/search', (req, res) => {
        const made = "SELECT * FROM carbrands";
        db_1.db.query(made, (err, data) => {
            if (err)
                return res.json(err);
            cars.brands = data;
            const drives = "SELECT drivetype FROM transmissions";
            db_1.db.query(drives, (err, data) => {
                if (err)
                    return res.json(err);
                cars.trans = data;
                const gbs = "SELECT gb FROM gearboxes";
                db_1.db.query(gbs, (err, data) => {
                    if (err)
                        return res.json(err);
                    cars.gears = data;
                    const eng = "SELECT enginetype FROM enginetypes";
                    db_1.db.query(eng, (err, data) => {
                        if (err)
                            return res.json(err);
                        cars.engines = data;
                        const bdt = "SELECT bodytype FROM bodytypes";
                        db_1.db.query(bdt, (err, data) => {
                            if (err)
                                return res.json(err);
                            cars.bodies = data;
                            res.json(cars);
                        });
                    });
                });
            });
        });
    });
}
exports.Service = Service;

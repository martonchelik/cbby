import {db} from './db';
import {Express} from "express";
import {ICars, IBody, IBrands, IDrive, IEngines, IGears} from "./interfaces";

class Car {
    transmissions: IDrive = {};
    bodies: IBody = {};
    gears: IGears = {};
    engines: IEngines = {};
    brands: IBrands = {};
    cars: ICars = {};
    getAll = (app: Express) => {
        const drives = "SELECT drivetype FROM transmissions";
        const made = "SELECT * FROM carbrands";
        const gbs = "SELECT gb FROM gearboxes";
        const eng = "SELECT enginetype FROM enginetypes";
        const bdt = "SELECT bodytype FROM bodytypes";
        app.get('/search', (req, res) => {
            Promise.all([
                new Promise<ICars['brands']>((resolve, reject) => {
                    db.query(made, (err, data: ICars['brands']) => {
                        err ? reject(err) : resolve(data)
                    })
                }),
                new Promise<ICars['trans']>((resolve, reject) => {
                    db.query(drives, (err, data: ICars['trans']) => {
                        err ? reject(err) : resolve(data)
                    })
                }),
                new Promise<ICars['gears']>((resolve, reject) => {
                    db.query(gbs, (err, data: ICars['gears']) => {
                        err ? reject(err) : resolve(data)
                    })
                }),
                new Promise<ICars['engines']>((resolve, reject) => {
                    db.query(eng, (err, data: ICars['engines']) => {
                        err ? reject(err) : resolve(data)
                    })
                }),
                new Promise<ICars['bodies']>((resolve, reject) => {
                    db.query(bdt, (err, data: ICars['bodies']) => {
                        err ? reject(err) : resolve(data)
                    })
                })
            ]).then((values) => {
                this.cars.brands = values[0];
                this.cars.trans = values[1];
                this.cars.gears = values[2];
                this.cars.engines = values[3];
                this.cars.bodies = values[4];
                return res.json(this.cars)
            }).catch((err) => {
                return res.json(err)
            })
        })
    };
    getMade(app: Express){
        app.get('/made', (req, res) => {
            const made = "SELECT * FROM carbrands";
            new Promise<IBrands['brands']>((resolve, reject)=> {
                db.query(made, (err, data: IBrands['brands']) => {err? reject(err):resolve(data)})
            }).then((data) => {this.brands.brands = data; return res.json(this.brands)}).catch((err) => {return res.json(err)})
        })
    };
    getEngines(app: Express){
        app.get('/engines', (req,res)=>{
            const made = "SELECT enginetype FROM enginetypes";
            new Promise<IEngines['engines']>((resolve, reject)=> {
                db.query(made, (err, data: IEngines['engines']) => {err? reject(err):resolve(data)})
            }).then((data) => {this.engines.engines = data; return res.json(this.engines)}).catch((err) => {return res.json(err)})
        })
    };
    getGearboxes(app: Express){
        app.get('/gearboxes', (req,res)=>{
            const made = "SELECT gb FROM gearboxes";
            new Promise<IGears['gears']>((resolve, reject)=> {
                db.query(made, (err, data :IGears['gears']) => {err? reject(err):resolve(data)})
            }).then((data) => {this.gears.gears = data; return res.json(this.gears)}).catch((err) => {return res.json(err)})
        })
    };
    getTransmissions(app: Express){
        app.get('/transmissions', (req,res)=>{
            const made = "SELECT drivetype FROM transmissions";
            new Promise<IDrive['trans']>((resolve, reject)=> {
                db.query(made, (err, data: IDrive['trans']) => {err? reject(err):resolve(data)})
            }).then((data) => {this.transmissions.trans = data; return res.json(this.transmissions)}).catch((err) => {return res.json(err)})
        })
    };
    getBodies(app: Express){
        app.get('/bodies', (req,res)=>{
            const made = "SELECT bodytype FROM carbrands";
            new Promise<IBody['bodies']>((resolve, reject)=> {
                db.query(made, (err, data: IBody['bodies']) => {err? reject(err):resolve(data)})
            }).then((data) => {this.bodies.bodies = data; return res.json(this.bodies)}).catch((err) => {return res.json(err)})
        })
    };
}
export const car = new Car();
import {db} from './db';
import {Express} from "express";
import {IBody, IBrands, IDrive, IEngines, IGears} from "./interfaces";

class Car2 {
    transmissions: IDrive = {};
    bodies: IBody = {};
    gears: IGears = {};
    engines: IEngines = {};
    brands: IBrands = {};
    getAll = (app: Express) => {
        const drives = "SELECT drivetype FROM transmissions";
        const made = "SELECT * FROM carbrands";
        const gbs = "SELECT gb FROM gearboxes";
        const eng = "SELECT enginetype FROM enginetypes";
        const bdt = "SELECT bodytype FROM bodytypes";
        app.get('/search', (req, res) => {
            Promise.all([
                new Promise<IBrands>((resolve, reject) => {
                    db.query(made, (err, data: IBrands) => {
                        err ? reject(err) : resolve(data)
                    })
                }),
                new Promise<IDrive>((resolve, reject) => {
                    db.query(drives, (err, data: IDrive) => {
                        err ? reject(err) : resolve(data)
                    })
                }),
                new Promise<IGears>((resolve, reject) => {
                    db.query(gbs, (err, data: IGears) => {
                        err ? reject(err) : resolve(data)
                    })
                }),
                new Promise<IEngines>((resolve, reject) => {
                    db.query(eng, (err, data: IEngines) => {
                        err ? reject(err) : resolve(data)
                    })
                }),
                new Promise<IBody>((resolve, reject) => {
                    db.query(bdt, (err, data: IBody) => {
                        err ? reject(err) : resolve(data)
                    })
                })
            ]).then((values) => {
                this.brands = values[0];
                this.transmissions = values[1];
                this.gears = values[2];
                this.engines = values[3];
                this.bodies = values[4];
                return res.json(this)
            }).catch((err) => {
                return res.json(err)
            })
        })
    };
    getMade(app: Express){
        app.get('/made', (req, res) => {
            res.json(this.brands);
        })
    };
    getEngines(app: Express){
        app.get('/engines', (req,res)=> {
            res.json(this.engines);
        })
    };
    getGearboxes(app: Express){
        app.get('/gearboxes', (req,res)=>{
            res.json(this.gears)
        })
    };
    getTransmissions(app: Express){
        app.get('/transmissions', (req,res)=>{
            res.json(this.transmissions)
        })
    };
    getBodies(app: Express){
        app.get('/bodies', (req,res)=>{
            res.json(this.bodies)
        })
    };
}
export const car2 = new Car2();
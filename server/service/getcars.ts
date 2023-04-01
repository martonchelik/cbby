import {db} from './db';
import {Express} from "express";
import {ICars} from "./interfaces";

export const GetAllAsync = (app: Express) => {
    const cars: ICars ={}
    const drives = "SELECT drivetype FROM transmissions"
    const made = "SELECT * FROM carbrands"
    const gbs = "SELECT gb FROM gearboxes"
    const eng = "SELECT enginetype FROM enginetypes"
    const bdt = "SELECT bodytype FROM bodytypes"
    app.get('/search', async (req,res)=>{
        await Promise.all([
            new Promise<ICars['brands']>((resolve, reject)=> {
                db.query(made, (err, data: ICars['brands']) => {err? reject(err):resolve(data)})
            }),
            new Promise<ICars['trans']>((resolve, reject)=> {
                db.query(drives, (err, data: ICars['trans']) => {err? reject(err):resolve(data)})
            }),
            new Promise<ICars['gears']>((resolve, reject)=> {
                db.query(gbs, (err, data: ICars['gears']) => {err? reject(err):resolve(data)})
            }),
            new Promise<ICars['engines']>((resolve, reject)=> {
                db.query(eng, (err, data: ICars['engines']) => {err? reject(err):resolve(data)})
            }),
            new Promise<ICars['bodies']>((resolve, reject)=> {
                db.query(bdt, (err, data: ICars['bodies']) => {err? reject(err):resolve(data)})
            })
        ]).then((values)=>{
            cars.brands = values[0]
            cars.trans = values[1]
            cars.gears = values[2]
            cars.engines = values[3]
            cars.bodies = values[4]
            return res.json(cars)
        }).catch((err) => {return res.json(err)})
    })
}
class Gets {
    made(app: Express){
        app.get('/made', async (req, res) => {
            const made = "SELECT * FROM carbrands";
            await new Promise((resolve, reject)=> {
                db.query(made, (err, data) => {err? reject(err):resolve(data)})
            }).then((data) => {return res.json(data)}).catch((err) => {return res.json(err)})
        })
    }
    engines(app: Express){
        app.get('/engines', async (req,res)=>{
            const made = "SELECT enginetype FROM enginetypes"
            await new Promise((resolve, reject)=> {
                db.query(made, (err, data) => {err? reject(err):resolve(data)})
            }).then((data) => {return res.json(data)}).catch((err) => {return res.json(err)})
        })
    }
    gearboxes(app: Express){
        app.get('/gearboxes', async (req,res)=>{
            const made = "SELECT gb FROM gearboxes"
            await new Promise((resolve, reject)=> {
                db.query(made, (err, data) => {err? reject(err):resolve(data)})
            }).then((data) => {return res.json(data)}).catch((err) => {return res.json(err)})
        })
    }
    transmissions(app: Express){
        app.get('/transmissions', async (req,res)=>{
            const made = "SELECT drivetype FROM transmissions"
            await new Promise((resolve, reject)=> {
                db.query(made, (err, data) => {err? reject(err):resolve(data)})
            }).then((data) => {return res.json(data)}).catch((err) => {return res.json(err)})
        })
    }
    bodies(app: Express){
        app.get('/bodies', async (req,res)=>{
            const made = "SELECT bodytype FROM carbrands"
            await new Promise((resolve, reject)=> {
                db.query(made, (err, data) => {err? reject(err):resolve(data)})
            }).then((data) => {return res.json(data)}).catch((err) => {return res.json(err)})
        })
    }
}
export const gets = new Gets();
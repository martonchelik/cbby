import {db} from './db';
import RowDataPacket from "mysql2/typings/mysql/lib/protocol/packets/RowDataPacket";
import OkPacket from "mysql2/typings/mysql/lib/protocol/packets/OkPacket";
import ResultSetHeader from "mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader";
import {Express} from "express";



interface Cars {
    brands?: (RowDataPacket[])[] | RowDataPacket[] | OkPacket | OkPacket[] | ResultSetHeader
    gears?: (RowDataPacket[])[] | RowDataPacket[] | OkPacket | OkPacket[] | ResultSetHeader
    engines?: (RowDataPacket[])[] | RowDataPacket[] | OkPacket | OkPacket[] | ResultSetHeader
    bodies?: (RowDataPacket[])[] | RowDataPacket[] | OkPacket | OkPacket[] | ResultSetHeader
    trans?: (RowDataPacket[])[] | RowDataPacket[] | OkPacket | OkPacket[] | ResultSetHeader
}

export function Service(app: Express): void {
    const cars: Cars ={}
        app.get('/search', (req,res)=>{
            const made = "SELECT * FROM carbrands"
            db.query(made,(err,data)=>{
                if(err) return res.json(err)
                cars.brands = data;
                const drives = "SELECT drivetype FROM transmissions"
                db.query(drives,(err,data)=>{
                    if(err) return res.json(err)
                    cars.trans = data;
                    const gbs = "SELECT gb FROM gearboxes"
                    db.query(gbs,(err,data)=>{
                        if(err) return res.json(err)
                        cars.gears = data;
                        const eng = "SELECT enginetype FROM enginetypes"
                        db.query(eng,(err,data)=>{
                            if(err) return res.json(err)
                            cars.engines = data;
                            const bdt = "SELECT bodytype FROM bodytypes"
                            db.query(bdt,(err,data)=>{
                                if(err) return res.json(err)
                                cars.bodies = data
                                res.json(cars)
                            })
                        })
                    })
                })
            })
        })
}
//Node JS version of older APIs
const mysql = require("mysql2");
const config = require("./config")

const db = mysql.createPool(config.db)

const Service = {
    getmade: (app)=> {
        app.get('/made', (req, res) => {
            const made = "SELECT * FROM carbrands";
            db.query(made, (err, data) => {
                if (err) return res.json(err)
                return res.json(data);
            })
        })
    },
    getengines: (app) =>{
        app.get('/engines', (req,res)=>{
            const made = "SELECT * FROM enginetypes"
            db.query(made,(err,data)=>{
                if(err) return res.json(err)
                return res.json(data)
            })
        })
    },
    getgearboxes: (app) =>{
        app.get('/gearboxes', (req,res)=>{
            const made = "SELECT * FROM gearboxes"
            db.query(made,(err,data)=>{
                if(err) return res.json(err)
                return res.json(data)
            })
        })
    },
    gettransmissions: (app) =>{
        app.get('/transmissions', (req,res)=>{
            const made = "SELECT * FROM transmissions"
            db.query(made,(err,data)=>{
                if(err) return res.json(err)
                return res.json(data)
            })
        })
    }
}

module.exports = Service



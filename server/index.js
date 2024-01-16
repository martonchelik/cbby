const cors = require("cors");
const express = require("express");
const mysql = require("mysql2")

const app = express();

app.use(express.json())
app.use(cors())

app.listen(4000, () => {
    console.log('bebra')
})

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"F4LFermiPascalVideo18",
    database:"cbby"
})

app.get('/', (req,res)=>{
    res.json("U've got in the bebra")
})

app.get('/made', (req,res)=>{
    const made = "SELECT * FROM carbrands"
    db.query(made,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/bodytypes', (req,res)=>{
    const made = "SELECT * FROM bodytypes"
    db.query(made,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/engines', (req,res)=>{
    const made = "SELECT * FROM enginetypes"
    db.query(made,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/gearboxes', (req,res)=>{
    const made = "SELECT * FROM gearboxes"
    db.query(made,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/transmissions', (req,res)=>{
    const made = "SELECT * FROM transmissions"
    db.query(made,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/models/bmw', (req,res)=>{
    const model = "SELECT model FROM models WHERE modelbrand = 1"
    db.query(model,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/models/audi', (req,res)=>{
    const model = "SELECT model FROM models WHERE modelbrand = 2"
    db.query(model,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/models/ford', (req,res)=>{
    const model = "SELECT model FROM models WHERE modelbrand = 3"
    db.query(model,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/models/mercedes', (req,res)=>{
    const model = "SELECT model FROM models WHERE modelbrand = 4"
    db.query(model,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/models/volvo', (req,res)=>{
    const model = "SELECT model FROM models WHERE modelbrand = 5"
    db.query(model,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/models/porsche', (req,res)=>{
    const model = "SELECT model FROM models WHERE modelbrand = 6"
    db.query(model,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/models/mini', (req,res)=>{
    const model = "SELECT model FROM models WHERE modelbrand = 7"
    db.query(model,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/models/hummer', (req,res)=>{
    const model = "SELECT model FROM models WHERE modelbrand = 8"
    db.query(model,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/models/bentley', (req,res)=>{
    const model = "SELECT model FROM models WHERE modelbrand = 9"
    db.query(model,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/models/ferrari', (req,res)=>{
    const model = "SELECT model FROM models WHERE modelbrand = 10"
    db.query(model,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/models/vw', (req,res)=>{
    const model = "SELECT model FROM models WHERE modelbrand = 11"
    db.query(model,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/models', (req,res)=>{
    const model = "SELECT model FROM models"
    db.query(model,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)+"";
    })
})
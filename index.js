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
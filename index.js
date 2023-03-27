const cors = require("cors");
const express = require("express");
const mysql = require("mysql2")

const app = express();

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 4000, () => {
    console.log('Server is running')
})

const db = mysql.createConnection({
    host:"eu-cdbr-west-03.cleardb.net",
    user:"b26e27e26d1df4",
    password:"e77f53d7",
    database:"heroku_147c2869609d665"
})

app.get('/', (req,res)=>{
    res.json("This is server side")
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
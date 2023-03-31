import cors from 'cors'
import express, { Express, Request, Response } from 'express';
import {Service} from './service/getcars'

const app: Express = express();


app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 4000, () => {
    console.log('Server is running')
})

app.get('/', (req,res)=>{
    res.json("This is server side")
})

Service(app);


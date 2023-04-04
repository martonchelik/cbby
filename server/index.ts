import cors from 'cors'
import express, {Express} from 'express';
import {car} from './service/getcars'

const app: Express = express();


app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 4000, () => {
    console.log('Server is running')
})

app.get('/', (req,res)=>{
    res.json("This is server side")
})

car.getAll(app);
car.getMade(app);
car.getBodies(app);
car.getEngines(app);
car.getGearboxes(app);
car.getTransmissions(app);




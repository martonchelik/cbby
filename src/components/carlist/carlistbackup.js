/*import './Carlist.css';
import React, {useState, useEffect} from 'react';
import index from "@mui/material/darkScrollbar";
import TextField from '@mui/material/TextField';
import AutoSelect from "../autocomplete/Autocomplete";
import ModelSelect from "../modelac/Modelac";
import Button from "@mui/material/Button";
import axios from "axios";
const {getCars} = require('../../service/service')



function Carlist() {
    const [carsmade, setCarsmade] = useState([]);
    //useEffect(() => {getCars().then((res)=>setCars(res.data))}, []);
    useEffect(()=>{
        const fetchAllCarbrands = async ()=>{
            try{
                const res = await axios.get("http://localhost:4000/made")
                setCars(res.data)
            }catch (err) {
                console.log(err)
            }
        }
        fetchAllCarbrands()
    })
    const carsmade=[]
    const carsgb=[]
    const carsbt=[]
    const carseng=[]
    const carstrans=[]
    const carsmodel=[]
    cars.map(car=>{
        carsmade.push(car.made)
        carsgb.push(car.gearbox)
        carsbt.push(car.bodytpe)
        carseng.push(car.enginetpe)
        carstrans.push(car.transmission)
    })
    const ucarsmade = new Set(carsmade)
    const ucarsgb = new Set(carsgb)
    const ucarsbt = new Set(carsbt)
    const ucarseng = new Set(carseng)
    const ucarstrans = new Set(carstrans)
    const ucarsmodel = new Set(carsmodel)

    const [model, setModel]=useState('');
    const [made, setMade] = useState('');
    const [transmission,setTransmission] = useState('')
    const [bodytpe, setBodytpe] = useState('');
    const [enginetpe, setEnginetpe] = useState('');
    const [gearbox, setGearbox] = useState('');
    return (
        <div className="App">
            <h1>Сar Brands: </h1>
            <div className="Made">

                {Array.from(ucarsmade).map((car,index)=>(<div key={index}>{car}</div>))}
            </div>
            <div className="Search">
                <div className="Srchtbl">
                    <div><AutoSelect color= "white"data={Array.from(ucarsmade)} fieldname={'Made'} val={setMade}/></div>
                    <div><ModelSelect data={cars} fieldname={'Model'} val={setModel} madeval={made} autoComplete="off"/></div>
                    <div>Years<TextField className='Years' label="From" variant="outlined" type="number" />
                        <TextField className='Years' label="To" variant="outlined" type="number"/></div>
                    <div><AutoSelect data={Array.from(ucarsbt)} fieldname='Body type' val={setBodytpe}/></div>
                    <div><AutoSelect data={Array.from(ucarseng)} fieldname='Engine type' val={setEnginetpe}/></div>
                    <div><AutoSelect data={Array.from(ucarsgb)} fieldname='Gearbox type'val={setGearbox}/></div>
                    <div><AutoSelect data={Array.from(ucarstrans)} fieldname='Transmission type' val={setTransmission}/></div>
                    <div>Price<TextField className='Years' label="From" variant="outlined" type="number" />
                        <TextField className='Years' label="To" variant="outlined" type="number"/></div>
                    <div><TextField label="ZIP" variant="outlined"/></div>
                </div>

            </div>
            <div className="Srchbtn"><Button variant="contained" className="Login" href="/search">Search</Button></div>
        </div>
    );
}

export default Carlist;
*/
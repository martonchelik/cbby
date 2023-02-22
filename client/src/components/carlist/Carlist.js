import './Carlist.css';
import React, {useState, useEffect} from 'react';
import index from "@mui/material/darkScrollbar";
import TextField from '@mui/material/TextField';
import AutoSelect from "../autocomplete/Autocomplete";
import ModelSelect from "../modelac/Modelac";


function Carlist() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/cars', {
        headers : {
            'Content-Type': 'application/json',
                'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => setCars(data))
    }, []
    );
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

            <div className="Made">
                <h1>Сar Brands: </h1>
                {Array.from(ucarsmade).map((car,index)=>(<div key={index}>{car}</div>))}
            </div>
            <div className="Search">
                <table className="Srchtbl">
                    <tbody>
                        <tr>
                            <td>
                                <div><AutoSelect color= "white"data={Array.from(ucarsmade)} fieldname={'Made'} val={setMade}/></div>

                            </td>
                            <td><div><ModelSelect data={cars} fieldname={'Model'} val={setModel} madeval={made} autoComplete="off"/></div></td>
                            <td><div>Years<TextField className='Years' label="From" variant="outlined" type="number" />
                            <TextField className='Years' label="To" variant="outlined" type="number"/></div></td>
                        </tr>
                        <tr>
                            <td><div><AutoSelect data={Array.from(ucarsbt)} fieldname='Body type' val={setBodytpe}/></div></td>
                            <td><div><AutoSelect data={Array.from(ucarseng)} fieldname='Engine type' val={setEnginetpe}/></div></td>
                            <td><div><AutoSelect data={Array.from(ucarsgb)} fieldname='Gearbox type'val={setGearbox}/></div></td>
                        </tr>
                        <tr>
                            <td><div><AutoSelect data={Array.from(ucarstrans)} fieldname='Transmission type' val={setTransmission}/></div></td>
                            <td><div>Price<TextField className='Years' label="From" variant="outlined" type="number" />
                                <TextField className='Years' label="To" variant="outlined" type="number"/></div></td>
                            <td><div><TextField label="ZIP" variant="outlined"/></div></td>
                        </tr>
                    </tbody>
                </table>
                <button className="Srchbtn">Search</button>
            </div>
        </div>
    );
}

export default Carlist;

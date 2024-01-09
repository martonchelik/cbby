import './Carlist.css';
import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import AutoSelect from "../autocomplete/Autocomplete";
import ModelSelect from "../modelac/Modelac";
import Button from "@mui/material/Button";
import axios from "axios";

function Carlist() {
    const [carsmade, setCarsmade] = useState([]);
    const [bodytypes, setBodytypes] = useState([]);
    const [enginetypes, setEnginetypes] = useState([]);
    const [gearboxes, setGearboxes] = useState([]);
    const [drivetypes,setDrivetypes] = useState([])

    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        const fetchAllCarbrands = async ()=>{
            try{
                const res = await axios.get("http://localhost:4000/made")
                setCarsmade(res.data)
                setLoaded(true)
            }catch (err) {
                console.log(err)
            }
        }
        fetchAllCarbrands()
        const fetchAllBodytypes = async ()=>{
            try{
                const res = await axios.get("http://localhost:4000/bodytypes")
                setBodytypes(res.data)
                setLoaded(true)
            }catch (err) {
                console.log(err)
            }
        }
        fetchAllBodytypes()
        const fetchAllEnginetypes = async ()=>{
            try{
                const res = await axios.get("http://localhost:4000/engines")
                setGearboxes(res.data)
                setLoaded(true)
            }catch (err) {
                console.log(err)
            }
        }
        fetchAllEnginetypes()

        const fetchAllGearboxes = async ()=>{
            try{
                const res = await axios.get("http://localhost:4000/gearboxes")
                setGearboxes(res.data)
                setLoaded(true)
            }catch (err) {
                console.log(err)
            }
        }
        fetchAllGearboxes()

        const fetchAllTransmissions = async ()=>{
            try{
                const res = await axios.get("http://localhost:4000/transmissions")
                setDrivetypes(res.data)
                setLoaded(true)
            }catch (err) {
                console.log(err)
            }
        }
        fetchAllTransmissions()

    },[loaded])

    const [made, setMade] = useState('');
    const [model, setModel]=useState('');
    const [transtype,setTranstype] = useState('')
    const [bodytype, setBodytype] = useState('');
    const [enginetype, setEnginetype] = useState('');
    const [gbtype, setGbtype] = useState('');
    const brands = []
    const bodies = []
    const engines = []
    const gbs = []
    const trns = []
    const models = ["There", "Will", "Be", "Models","Soon"]

    carsmade.map((mademap)=>{
        brands.push(mademap.carbrand)
    })
    bodytypes.map((bodymap)=>{
        bodies.push(bodymap.bodytype)
    })
    enginetypes.map((enginemap)=>{
        engines.push(enginemap.enginetype)
    })
    gearboxes.map((gbsmap)=>{
        gbs.push(gbsmap.gb)
    })

    drivetypes.map((trnsmap)=>{
        trns.push(trnsmap.drivetype)
    })

    return (
        <div className="App">
            <h1>Сar Brands: </h1>
            <div className="Made">
                {carsmade.map((cmade)=>(<div key={cmade.idcb}>{cmade.carbrand}</div>))}
            </div>
            <div className="Search">
                <div className="Srchtbl">
                    <div><AutoSelect data={Array.from(brands)} fieldname={'Made'} val={setMade}/></div>
                    <div><AutoSelect data={Array.from(models)} fieldname={'Model'} val={setModel}/></div>
                    <div>Years<TextField className='Years' label="From" variant="outlined" type="number" />
                    <TextField className='Years' label="To" variant="outlined" type="number"/></div>
                    <div><AutoSelect data={Array.from(bodies)} fieldname='Body type' val={setBodytype}/></div>
                    <div><AutoSelect data={Array.from(engines)} fieldname='Engine type' val={setEnginetype}/></div>
                    <div><AutoSelect data={Array.from(gbs)} fieldname='Gearbox type'val={setGbtype}/></div>
                    <div><AutoSelect data={Array.from(trns)} fieldname='Transmission type' val={setTranstype}/></div>
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

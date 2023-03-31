import axios from "axios";

export const fetchCars = ()=>{
    try{
        return axios.get(process.env.REACT_APP_API_URL +'/search')
    }catch (err) {
        console.log(err)
    }
}
import axios from "axios";

export const getCars = () =>{
    return axios.get(`${process.env.REACT_APP_API_URL}/cars`, {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
}
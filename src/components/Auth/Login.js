import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Auth.css';
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {loginServ, logoutServ} from "../../service/auth.service";
import {logInAction} from "../../store/reducers/loginReducer";

export default function Login() {
    const dispatch = useDispatch()
    const logIn = (nick) =>{
        dispatch({type: "logIn", payload: nick})
    }
    const [nickname,setNickname] = useState('')

    return (
        <div className="App">
            <div className="AuthForm">
                <TextField id="outlined-basic" label="Login" variant="outlined" onChange={event => setNickname(event.target.value)} />
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password"/>
                <Button variant="contained"  onClick={() => dispatch(loginServ(nickname))}>Log In</Button>
                <p>Don't have an account? <a href="/registration">Create.</a></p>
            </div>
        </div>
    );

}
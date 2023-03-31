import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Auth.css';
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {loginServ} from "../../service/auth.service";
import { ThemeProvider } from '@mui/material/styles';
import {buttons} from "../muithemes/buttons";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import FormControl from "@mui/material/FormControl";

export default function Login() {
    const dispatch = useDispatch()
    const logIn = (nick) =>{
        dispatch(loginServ(nick))
    }
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    if (isLoggedIn){
        window.location.href = "/search";
    }

    const [nickname,setNickname] = useState('');

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className="App">
            <div className="AuthForm">
                <TextField className="Inputs" id="outlined-basic" label="Login" variant="outlined" onChange={event => setNickname(event.target.value)} />
                <FormControl className="Inputs" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
                <ThemeProvider theme={buttons}><Button variant="contained"  onClick={() => logIn(nickname)}>Log In</Button></ThemeProvider>
                <p>Don't have an account? <a href="/registration">Create.</a></p>
            </div>
        </div>
    );

}
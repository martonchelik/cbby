import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {useState} from "react";
import Icon from 'react-icons-kit';
import {arrows_circle_check} from 'react-icons-kit/linea/arrows_circle_check'
import {arrows_exclamation} from 'react-icons-kit/linea/arrows_exclamation'

export default function Registration() {



    const [lowerValidated, setLowerValidated]=useState(false);
    const [upperValidated, setUpperValidated]=useState(false);
    const [numberValidated, setNumberValidated]=useState(false);
    const [specialValidated, setSpecialValidated]=useState(false);
    const [lengthValidated, setLengthValidated]=useState(false);
    const [password, setPassword]=useState('``');
    const [confirm, setConfirm]=useState('``');
    const [valid,setValid]=useState(false);
    const [disBut,setDisBut]=useState(true);

    const handleChange = (value) => {
        setPassword(value)
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,})')
        if(lower.test(value)){
            setLowerValidated(true);
        }
        else{
            setLowerValidated(false);
        }
        if(upper.test(value)){
            setUpperValidated(true);
        }
        else{
            setUpperValidated(false);
        }
        if(number.test(value)){
            setNumberValidated(true);
        }
        else{
            setNumberValidated(false);
        }
        if(special.test(value)){
            setSpecialValidated(true);
        }
        else{
            setSpecialValidated(false);
        }
        if(length.test(value)){
            setLengthValidated(true);
        }
        else{
            setLengthValidated(false);
        }

    }



    return (
        <div className="App">
            <div className="AuthForm">
                <TextField label="Email address" variant="outlined" />
                <TextField label="Login" variant="outlined" />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    onChange={event => handleChange(event.target.value)}
                />
                <div className='Valid'>
                    <div className={lowerValidated?'validated':'not-validated'} style={{color:lowerValidated?'green':'red'}}>
                        {lowerValidated?(
                            <span className='list-icon green'>
                                <Icon icon={arrows_circle_check}/>
                            </span>
                        ):(
                            <span className='list-icon'>
                                <Icon icon={arrows_exclamation}/>
                            </span>
                        )}
                        At least one lowercase letter
                    </div>
                    <div className={upperValidated?'validated':'not-validated'} style={{color:upperValidated?'green':'red'}}>
                        {upperValidated?(
                            <span className='list-icon green'>
                                <Icon icon={arrows_circle_check}/>
                            </span>
                        ):(
                            <span className='list-icon'>
                                <Icon icon={arrows_exclamation}/>
                            </span>
                        )}
                        At least one uppercase letter
                    </div>
                    <div className={numberValidated?'validated':'not-validated'} style={{color:numberValidated?'green':'red'}}>
                        {numberValidated?(
                            <span className='list-icon green'>
                                <Icon icon={arrows_circle_check}/>
                            </span>
                        ):(
                            <span className='list-icon'>
                                <Icon icon={arrows_exclamation}/>
                            </span>
                        )}
                        At least one number
                    </div>
                    <div className={specialValidated?'validated':'not-validated'} style={{color:specialValidated?'green':'red'}}>
                        {specialValidated?(
                            <span className='list-icon green'>
                                <Icon icon={arrows_circle_check}/>
                            </span>
                        ):(
                            <span className='list-icon'>
                                <Icon icon={arrows_exclamation}/>
                            </span>
                        )}
                        At least one special character
                    </div>
                    <div className={lengthValidated?'validated':'not-validated'} style={{color:lengthValidated?'green':'red'}}>
                        {lengthValidated?(
                            <span className='list-icon green'>
                                <Icon icon={arrows_circle_check}/>
                            </span>
                        ):(
                            <span className='list-icon'>
                                <Icon icon={arrows_exclamation}/>
                            </span>
                        )}
                        At least 8 characters
                    </div>
                </div>
                <TextField
                    label="Confirm password"
                    variant="outlined"
                    type="password"
                    onChange={event => setConfirm(event.target.value)}
                    error={password !== confirm}
                    helperText={password !== confirm ? "Password does not match":""}
                />
                <Button variant="contained" href="/search">Create account</Button>
            </div>
        </div>
    );
}
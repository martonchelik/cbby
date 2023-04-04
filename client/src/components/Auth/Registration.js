import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {useState} from "react";
import Icon from 'react-icons-kit';
import {arrows_circle_check} from 'react-icons-kit/linea/arrows_circle_check'
import {arrows_exclamation} from 'react-icons-kit/linea/arrows_exclamation'
import {useSelector} from "react-redux";
import {buttons} from "../muithemes/buttons";
import {ThemeProvider} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from "@mui/material/FormHelperText";
import {Navigate} from "react-router-dom";

export default function Registration() {
    const isLoggedIn = useSelector(state => state.isLoggedIn)


    const [lowerValidated, setLowerValidated] = useState(false);
    const [upperValidated, setUpperValidated] = useState(false);
    const [numberValidated, setNumberValidated] = useState(false);
    const [specialValidated, setSpecialValidated] = useState(false);
    const [lengthValidated, setLengthValidated] = useState(false);
    const [password, setPassword] = useState('``');
    const [confirm, setConfirm] = useState('``');

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleChange = (value) => {
        setPassword(value)
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,})')
        setLowerValidated(lower.test(value))
        setUpperValidated(upper.test(value))
        setNumberValidated(number.test(value))
        setSpecialValidated(special.test(value))
        setLengthValidated(length.test(value))
    }

    if (isLoggedIn) {
        return <Navigate to="/search"/>
    } else {
        return (
            <div className="App">
                <div className="AuthForm">
                    <TextField className="Inputs" label="Email address" variant="outlined"/>
                    <TextField className="Inputs" label="Login" variant="outlined"/>
                    <FormControl className="Inputs" variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={event => handleChange(event.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <div className='Valid'>
                        <div className={lowerValidated ? 'validated' : 'not-validated'}
                             style={{color: lowerValidated ? 'green' : 'red'}}>
                            {lowerValidated ? (
                                <span className='list-icon green'>
                                <Icon icon={arrows_circle_check}/>
                            </span>
                            ) : (
                                <span className='list-icon'>
                                <Icon icon={arrows_exclamation}/>
                            </span>
                            )}
                            At least one lowercase letter
                        </div>
                        <div className={upperValidated ? 'validated' : 'not-validated'}
                             style={{color: upperValidated ? 'green' : 'red'}}>
                            {upperValidated ? (
                                <span className='list-icon green'>
                                <Icon icon={arrows_circle_check}/>
                            </span>
                            ) : (
                                <span className='list-icon'>
                                <Icon icon={arrows_exclamation}/>
                            </span>
                            )}
                            At least one uppercase letter
                        </div>
                        <div className={numberValidated ? 'validated' : 'not-validated'}
                             style={{color: numberValidated ? 'green' : 'red'}}>
                            {numberValidated ? (
                                <span className='list-icon green'>
                                <Icon icon={arrows_circle_check}/>
                            </span>
                            ) : (
                                <span className='list-icon'>
                                <Icon icon={arrows_exclamation}/>
                            </span>
                            )}
                            At least one number
                        </div>
                        <div className={specialValidated ? 'validated' : 'not-validated'}
                             style={{color: specialValidated ? 'green' : 'red'}}>
                            {specialValidated ? (
                                <span className='list-icon green'>
                                <Icon icon={arrows_circle_check}/>
                            </span>
                            ) : (
                                <span className='list-icon'>
                                <Icon icon={arrows_exclamation}/>
                            </span>
                            )}
                            At least one special character
                        </div>
                        <div className={lengthValidated ? 'validated' : 'not-validated'}
                             style={{color: lengthValidated ? 'green' : 'red'}}>
                            {lengthValidated ? (
                                <span className='list-icon green'>
                                <Icon icon={arrows_circle_check}/>
                            </span>
                            ) : (
                                <span className='list-icon'>
                                <Icon icon={arrows_exclamation}/>
                            </span>
                            )}
                            At least 8 characters
                        </div>
                    </div>
                    <FormControl className="Inputs" variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={event => setConfirm(event.target.value)}
                            error={password !== confirm}
                            helperText={password !== confirm ? "Password does not match" : ""}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Confirm password"
                        />
                        {password !== confirm && (
                            <FormHelperText error>
                                Password does not match
                            </FormHelperText>
                        )}
                    </FormControl>
                    <ThemeProvider theme={buttons}><Button variant="contained">Create account</Button></ThemeProvider>
                </div>
            </div>
        );
    }
}
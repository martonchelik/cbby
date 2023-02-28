import React from 'react';
import './Header.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Header = () => {
    return (
        <div className="App-header">
            <div className="Nav">
                <a href="/"><img src="images/carbuy.png" alt="logo" /></a>
                <Button variant="contained" className="Plc" href="/">Place an advertisement</Button>
                <Button variant="contained" className="Login" href="/">Log In</Button>
            </div>
        </div>
    );
};

export default Header;
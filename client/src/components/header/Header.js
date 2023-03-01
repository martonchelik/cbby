import React from 'react';
import './Header.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Header = () => {
    return (
        <div className="App-header">
            <div className="Nav">
                <a href="/"><img src="images/carbuy.png" alt="logo" /></a>
                <a href="/" className="Plca"><button className="Plc" >Place an advertisement</button></a>
                <a href="/"><button className="Login" >Log In</button></a>
            </div>
        </div>
    );
};

export default Header;
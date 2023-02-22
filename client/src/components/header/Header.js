import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="App-header">
            <div className="Nav">
                <a href="/"><img src="images/carbuy.png" alt="logo" width="210px" /></a>
                <a href="/"><button className="Plc" >Place an advertisement</button></a>
                <a href="/"><button className="Login" >Log In</button></a>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import './Header.css';
import {useDispatch, useSelector} from "react-redux";
import {logoutServ} from "../../service/auth.service";


const Header = () => {
    const nickname = useSelector(state => state.user)
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const dispatch = useDispatch()
    return (
        <div className="App-header">
            <div className="Nav">
                <a href="/"><img src="images/carbuy.png" alt="logo" /></a>
                <a href="/" className="Plca"><button className="Plc" >Place an advertisement</button></a>
                {isLoggedIn ?
                    <button className="Login" id="Log" onClick={() => dispatch(logoutServ())}>Hello, {nickname}! Log Out?</button>
                    :<a href="/Login"><button className="Login" id="Log">Log In</button></a>}
            </div>
        </div>
    );
};

export default Header;
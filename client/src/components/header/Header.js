import React from 'react';
import './Header.css';
import {useDispatch, useSelector} from "react-redux";
import {logoutServ} from "../../service/auth.service";


const Header = () => {
    const nickname = useSelector(state => state.user)
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const dispatch = useDispatch()
    const logOut = () =>{
        dispatch(logoutServ())
    }
    return (
        <div className="App-header">
            <div className="Nav">
                <a href="/"><img src="images/carbuy.png" alt="logo" /></a>
                <a href="/" className="Plca"><button className="Plc" >Place an advertisement</button></a>
                {isLoggedIn ?
                    <button className="Login" id="Log" onClick={() => logOut()}>Hello, {nickname}! Log Out?</button>
                    :<div><a href="/login"><button className="Login" id="Log">Log In</button></a><a href="/registration"><button className="Login" id="Signup">Sign Up</button></a></div>}
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Carlist from "./components/carlist/Carlist";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/search' element={<Carlist/>}/>
                <Route path='/' element={<Info/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/registration' element={<Registration/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
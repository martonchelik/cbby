import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Carlist from "./components/carlist/Carlist";
import Header from "./components/header/Header";
import Info from "./components/info/Info";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/search' element={<Carlist/>}/>
                <Route path='/' element={<Info/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
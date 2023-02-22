import React, {useState} from 'react';
import "./Info.css";

function Info(){
    return(
        <div className="App">
            <div className="Main"><h1>About Us:</h1>Carbuy is service of car advertisement. Our vision is to provide a smooth
                car buying and selling journey for all Contrynamians. At Carbuy, everything we do from product
                development to marketing & communications aims to empower our customers and give them greater
                confidence when it comes to trading cars – regardless of how much they know about cars or how
                engaged they might be in the process.
                <h1>Our services:</h1>
                <ul>
                    <li>We provide you with tools to help you, compare and decide</li>
                    <li>Sell in a snap by listing your car straight from your mobile</li>
                    <li>Over 200,000 new and used cars to choose from on <a href="/search">Carbuy</a></li>
                </ul>
                <a href="/search"><button className="Srch">Search cars on Carbuy</button></a>
            </div>
        </div>
    );
}

export default Info;
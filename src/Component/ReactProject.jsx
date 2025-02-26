import React from 'react';
import { useState } from 'react';

import './ReactProject.css';
import {Link, Router, Routes} from 'react-router-dom';

const ReactProject = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(false);

    return (
        <div className='reactpro-container'>
            <div className="bg-animation">
                <div id="stars"></div>
            </div>
            <div className="logo">
                <img src="/assets/logo.png" alt="logo" width={'50px'} height={'50px'} />
            </div>
            <h2 className="pro_title rpro">React Projects</h2>
            <div className='app-container'>
                <div className='apphover'>
                <Link to="/calc" onClick={handleClick}className='calcapp'>
                    <img src="/assets/CallApp.png"alt="Calculator" width={'200px'} />
                    <h3>Calculator</h3>
                    <button className='calappbtn'>Open Calculator</button></Link>
                </div>

                <div className='apphover'>
                <Link to="/game" onClick={handleClick}className='calcapp'>
                    <img src="/assets/Gameico.png"alt="NumGame" width={'200px'} />
                    <h3>Num Guessing Game</h3>
                    <button className='calappbtn'> Start Play</button></Link>
                </div>

                <div className='apphover'>
                <Link to="/weather" onClick={handleClick}className='calcapp'>
                    <img src="/assets/wet.png"alt="NumGame" width={'200px'} />
                    <h3>Weather App</h3>
                    <button className='calappbtn'>Open</button></Link>
                </div>             
            </div>
        </div>

    );
};

export default ReactProject;

import React from 'react';
import './serviceStyle.css';
import { BrowserRouter as Router,Route,NavLink } from "react-router-dom";

const MainServices = () => {
    return (
        <div className='serviceStyle'>
            <div className='headerStyle'>
                 <NavLink to='/services'>Main Services</NavLink>
            </div>
        </div>
    );
}

export default MainServices;
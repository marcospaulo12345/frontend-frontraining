import React from "react";

import Logo from '../../assets/images/logo.png';

import './styles.css'

export default function NavBar(){
    return (
        <div className="navbar">
            <div className="nav-left">
                <img src={Logo}/>
            </div>
        </div>
    );
}
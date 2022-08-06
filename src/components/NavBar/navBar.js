import React from "react";
import {Link} from 'react-router-dom';

import Logo from '../../assets/images/logo.png';

import './styles.css'

export default function NavBar(){
    return (
        <div className="navbar">
            <div className="nav-left">
                <img src={Logo}/>
            </div>
            <div className="nav-right">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/"> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Desafios</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Soluções</Link>
                    </li>
                    <li className="nav-item" id="name-user">
                        <Link to="/">
                            <p>Marcos</p>
                            <div className="icon-user">
                                <p>M</p>
                            </div>
                        </Link>
                        
                    </li>
                </ul>
            </div>
        </div>
    );
}
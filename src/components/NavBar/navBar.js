import React, { useContext } from "react";
import {Link} from 'react-router-dom';

import Logo from '../../assets/images/logo.png';
import { Context } from "../../Context/authContext";

import './styles.css'

export default function NavBar(){
    const {authenticated, handleLogout, user} = useContext(Context);

    return (
        <div className="navbar">
            <div className="nav-left">
                <img src={Logo} alt="Logo"/>
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
                        {authenticated ? (
                            <div className="btn-user">
                                <Link >
                                    <p>{user.username}</p>
                                    <div className="icon-user">
                                        <p>{user.username[0].toUpperCase()}</p>
                                    </div>
                                </Link>
                                <div class="dropup-content">
                                    <Link to="#">Perfil</Link>
                                    <Link to="/" onClick={() => handleLogout()}>Sair</Link>
                                </div>
                            </div>
                        ): <Link to="/login" className="btn-login">Entrar</Link>}
                        
                        
                    </li>
                </ul>
            </div>
        </div>
    );
}
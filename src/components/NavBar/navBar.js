import React, { useContext } from "react";
import {Link} from 'react-router-dom';

import Logo from '../../assets/images/logo.png';
import Search from '../../assets/images/Search.png'

import { Context } from "../../Context/authContext";

import './styles.css'

export default function NavBar({isHome = false, isChallenge=false, setSearch=false}){
    const {authenticated, handleLogout, user} = useContext(Context);

    const handlekeyDown = (event) => {
        if(event.key === 'Enter') {
            setSearch(event.target.value);
        }
    }

    return (
        <div className="navbar" style={{'background-color': isHome === true ? null : '#2C2C2C'}}>
            <div className="nav-left">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="nav-right">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/"> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/desafios">Desafios</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/solucoes">Soluções</Link>
                    </li>
                    {isChallenge ? (
                        <li className="nav-item">
                            <img src={Search} className="icon-input" width="21" height='21'/>
                            <input 
                                type="search" 
                                placeholder="Buscar desafio..."
                                className="input-search"
                                onKeyDown={handlekeyDown}
                            />
                        </li>
                    ): null}
                    <li className="nav-item" id="name-user">
                        {authenticated ? (
                            <div className="btn-user">
                                <Link to='#'>
                                    <p>{user.username}</p>
                                    <div className="icon-user">
                                        <p>{user.username[0].toUpperCase()}</p>
                                    </div>
                                </Link>
                                <div class="dropup-content">
                                    <Link to="/perfil">Perfil</Link>
                                    <Link to="#" onClick={() => handleLogout()}>Sair</Link>
                                </div>
                            </div>
                        ): <Link to="/login" className="btn-login">Entrar</Link>}
                        
                        
                    </li>
                </ul>
            </div>
        </div>
    );
}
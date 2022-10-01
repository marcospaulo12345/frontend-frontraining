import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css'

import Notfoundimg from '../../assets/images/not_found.svg';
import NavBar from '../../components/NavBar/navBar';

export default function NotFound() {
    return (
        <div className="container-error">
            <NavBar />
            <img src={Notfoundimg} alt='Pagina não encontrada' className='img-notfound'/>
            <h1>Página não econtrada!</h1>
            <Link to='/' className='btn-return-home'>Voltar para Home</Link>
        </div>
    )
}
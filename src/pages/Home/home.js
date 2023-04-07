import React from "react";

import NavBar from "../../components/NavBar/navBar";
import imageHome from '../../assets/images/undraw_programming_re_kg9v.svg'
import arrowRight from '../../assets/images/arrow-right.png';

import api from '../../api';

import './styles.css';
import { useEffect } from "react";

export default function Home(){

    useEffect(() => {
        api.get('/device/all').then(response => {
            console.log(response)
        })
    }, []);

    return (
        <div className="home">
            <NavBar isHome={true}/>
            <div className="home-body">
                <div className="home-left">
                    <h1>Desafios FrontEnd</h1>
                    <p>Plataforma voltada para desenvolvedor Front-end. 
                        Nossa plataforma possibilita desenvolvedores encontrar 
                        desafios Front-end, com o layout e informações de cores, 
                        fontes e icones. </p>
                    <button>
                        Vamos começar 
                        <img src={arrowRight}/>
                    </button>
                </div>
                <div className="home-right">
                    <img src={imageHome} />
                </div>
            </div>
        </div>
    );
}
import React from "react";

import NavBar from '../../components/NavBar/navBar';
import LandingPage from '../../assets/images/page_01.jpg'

import './styles.css';

export default function DetailsSolution() {
    return (
        <section className="details-solution">
            <NavBar isHome={false} />
            <div className="body-details-solution">
                <div className="div-challenge">
                    <img src={LandingPage} width='206' height='150'/>
                    <div className="div-challenge-info">
                        <p>Esta é uma solução para o desafio ...</p>
                        <h1>APP de Calculadora de Gorjeta</h1>
                        <div className="tools-level">
                            <div className="tools">
                                <h2>HTML</h2>
                                <h2>CSS</h2>
                                <h2>JS</h2>
                            </div>
                            <div className="level">
                                <span>1</span>
                                <h3>Fácil</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="div-solution">
                    <img src={LandingPage} width='700' height='436'/>
                    <div className="div-solution-info">
                        <h1>APP de Calculadora de Gorjeta usando Tailwind CSS </h1>
                        <div className="user-solution">
                            <div className="info-user">
                                <div className="user-solution-icon">M</div>
                                <div className="user-solution-info">
                                    <h2>Marcos Paulo</h2>
                                    <h3>marcos@gmail.com</h3>
                                    <h4>Enviado a 1 hora atrás</h4>
                                </div>
                            </div>
                            <div className="user-points">
                                110 Pontos
                            </div>
                        </div>
                        <div className="solution-buttons">
                            <button className="btn-site">Visualizar Site</button>
                            <button className="btn-repo">Ver Código</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
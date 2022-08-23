import React from "react";

import NavBar from '../../components/NavBar/navBar';
import LandingPage from '../../assets/images/page_01.jpg'

import './styles.css';

export default function DetailsSolution(props) {
    const level = ['Fácil', 'Médio', 'Difícil']
    const colorlevel = ['#6ABECD', '#AAD742', '#F1B604']

    const solution = props.location.state

    return (
        <section className="details-solution">
            <NavBar isHome={false} />
            <div className="body-details-solution">
                <div className="div-challenge">
                    <img src={`http://localhost:5000/${solution.challenge.image}`} width='206' height='150'/>
                    <div className="div-challenge-info">
                        <p>Esta é uma solução para o desafio ...</p>
                        <h1>{solution.challenge.title}</h1>
                        <div className="tools-level">
                            <div className="tools">
                                {solution.challenge.tools.split(',').map((value, index) => (
                                    <h2 key={index}>{value}</h2>
                                ))}
                            </div>
                            <div className="level" style={{backgroundColor: colorlevel[solution.challenge.level - 1]}}>
                                <span>1</span>
                                <p>Fácil</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="div-solution">
                    <img src={`http://localhost:5000/${solution.image}`} width='700' height='436'/>
                    <div className="div-solution-info">
                        <h1>{solution.title} </h1>
                        <div className="user-solution">
                            <div className="info-user">
                                <div className="user-solution-icon">M</div>
                                <div className="user-solution-info">
                                    <h2>{solution.user.username}</h2>
                                    <h3>{solution.user.email}</h3>
                                    <h4>Enviado a 1 hora atrás</h4>
                                </div>
                            </div>
                            <div className="user-points">
                                {solution.user.score} Pontos
                            </div>
                        </div>
                        <div className="solution-buttons">
                            <a href={solution.site} target="_blank" className="btn-site">Visualizar Site</a>
                            <a href={solution.repository} target="_blank" className="btn-repo">Ver Código</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
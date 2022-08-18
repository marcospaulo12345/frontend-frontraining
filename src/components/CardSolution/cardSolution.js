import React from "react";

import landingpage from '../../assets/images/page_01.jpg'

import './styles.css';

export default function CardSolution() {
    return (
        <div className="card-solution">
            <img src={landingpage} width='334' height='224'/>
            <div className="solution-body">
                <h1 className="title-solution">Landing Page remote work</h1>

                <div className="tools-solution">
                    <p>HTML</p>
                    <p>CSS</p>
                </div>

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
            </div>
        </div>
    )
}
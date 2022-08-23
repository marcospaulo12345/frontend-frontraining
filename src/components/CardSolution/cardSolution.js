import React from "react";

import landingpage from '../../assets/images/page_01.jpg';
import history from "../../history";

import './styles.css';

export default function CardSolution({solution}) {
    console.log(solution)
    return (
        <div className="card-solution" onClick={() => {
                return history.push('/detalhes/solucao')
            }}>
            <img src={`http://localhost:5000/${solution.image}`} width='334' height='224'/>
            <div className="solution-body">
                <h1 className="title-solution">{solution.title}</h1>

                <div className="tools-solution">
                    <p>HTML</p>
                    <p>CSS</p>
                </div>

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
                        {solution.user.score}
                    </div>
                </div>
            </div>
        </div>
    )
}
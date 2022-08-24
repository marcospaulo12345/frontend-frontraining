import React from "react";

import landingpage from '../../assets/images/page_01.jpg';
import history from "../../history";

import './styles.css';

export default function CardSolution({solution}) {
    
    function returnColorTools(index) {
        const listTools = {
            HTML: '#6ABFDB',
            CSS: '#3E54A3', 
            JavaScript: '#CF6390', 
            React: '#5ED3F3', 
            VueJS: '#3FB27F', 
            Sass: '#C66394', 
            Bootstrap: '#533B78', 
            NodeJS: '#81B847', 
            Axios: '#671DDF', 
            Bulma: '#00D1B2', 
            Uikit: '#2A9ECE', 
            Materialize: '#EB7077', 
            Semantic_UI: '#35BDB2'
        };
        return listTools[index];
    }

    function handleDetailSolution() {
        history.push({
            pathname: "/detalhes/solucao",
            state: solution
        })
    }

    function difHours(dateChallenge) {
        const hoje = new Date();
        const updatedAt = new Date(dateChallenge)
        const dif = new Date(hoje - updatedAt);
        return dif.getUTCHours()
    }

    return (
        <div className="card-solution" onClick={() => handleDetailSolution()}>
            <img src={`http://localhost:5000/${solution.image}`} width='334' height='224'/>
            <div className="solution-body">
                <h1 className="title-solution">{solution.title}</h1>

                <div className="tools-solution">
                    {solution.challenge.tools.split(',').map((value, index) =>(
                        <p key={index} style={{color: returnColorTools(value)}}>{value}</p>
                    ))}
                </div>

                <div className="user-solution">
                    <div className="info-user">
                        <div className="user-solution-icon">M</div>
                        <div className="user-solution-info">
                            <h2>{solution.user.username}</h2>
                            <h3>{solution.user.email}</h3>
                            <h4>Enviado a {difHours(solution.updatedAt)} hora atrás</h4>
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
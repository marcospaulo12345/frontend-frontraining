import React from "react";
import history from "../../history";

import NavBar from '../../components/NavBar/navBar';
import LandingPage from '../../assets/images/page_01.jpg'

import { difHours } from "../../utils/tools";

import './styles.css';

export default function DetailsSolution(props) {
    const level = ['Fácil', 'Médio', 'Difícil']
    const colorlevel = ['#6ABECD', '#AAD742', '#F1B604']

    const solution = props.location.state


    // function difHours(dateChallenge) {
    //     const hoje = new Date();
    //     const updatedAt = new Date(dateChallenge)
    //     const dif = new Date(hoje - updatedAt);
    //     return dif.getUTCHours()
    // }

    function handleProfile() {
        history.push({
            pathname: '../perfil/',
            state: {user: solution.user, userId: solution.userId}
        });
    }

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

    return (
        <section className="details-solution">
            <NavBar isHome={false} />
            <div className="body-details-solution">
                <div className="div-challenge">
                    <img src={`http://18.231.121.228:5000/${solution.challenge.image}`} width='206' height='150'/>
                    <div className="div-challenge-info">
                        <p>Esta é uma solução para o desafio ...</p>
                        <h1>{solution.challenge.title}</h1>
                        <div className="tools-level">
                            <div className="tools">
                                {solution.challenge.tools.split(',').map((value, index) => (
                                    <h2 key={index} style={{color: returnColorTools(value)}}>{value}</h2>
                                ))}
                            </div>
                            <div className="level" style={{backgroundColor: colorlevel[solution.challenge.level - 1]}}>
                                <span>{solution.challenge.level}</span>
                                <p>{level[solution.challenge.level - 1]}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="div-solution">
                    <img src={`http://18.231.121.228:5000/${solution.image}`} width='700' height='436'/>
                    <div className="div-solution-info">
                        <h1>{solution.title} </h1>
                        <div className="user-solution">
                            <div className="info-user" onClick={() => handleProfile()}>
                                <div className="user-solution-icon">{solution.user.username[0].toUpperCase()}</div>
                                <div className="user-solution-info">
                                    <h2>{solution.user.username}</h2>
                                    <h3>{solution.user.email}</h3>
                                    <h4>Enviado a {difHours(solution.updatedAt)} hora atrás</h4>
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
import React from "react";

import Page01 from '../../assets/images/page_01.jpg'
import history from "../../history";

import "./styles.css"

export default function CardChallenger({index, challenge}) {
    const level = ['Fácil', 'Médio', 'Difícil']
    const colorlevel = ['#6ABECD', '#AAD742', '#F1B604']


    function handleDetails() {
        history.push({
            pathname: '/desafio/detalhes',
            state: challenge
        })
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

    return(
        <section className="card" onClick={handleDetails}>
            <img src={`http://localhost:5000/${challenge.image}`} width="334" height="234" alt="Imagem Desafio"></img>
            <div className="card-body">
                <h1 className="title">{challenge.title}</h1>

                <div className="span-tools">
                    <div className="tools">
                        {challenge.tools.split(',').map((value, index) => (
                            <span className="html" key={index} style={{color: returnColorTools(value)}}>{value}</span>
                        ))}
                    </div>
                    <div className="level" style={{backgroundColor: colorlevel[challenge.level - 1]}}>
                        <span>{challenge.level}</span>
                        <p>{level[challenge.level - 1]}</p>
                    </div>
                </div>
                <p className="describe">{challenge.description}</p>
            </div>

            
        </section>
    )
}
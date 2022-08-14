import React from "react";

import Page01 from '../../assets/images/page_01.jpg'

import "./styles.css"

export default function CardChallenger({index, challenge}) {
    const level = ['Fácil', 'Médio', 'Difícil']
    const colorlevel = ['#6ABECD', '#AAD742', '#F1B604']

    console.log(challenge.image)

    return(
        <section className="card">
            <img src={`http://localhost:5000/${challenge.image}`} width="334" height="234" alt="Imagem Desafio"></img>
            <div className="card-body">
                <h1 className="title">{challenge.title}</h1>

                <div className="span-tools">
                    <div className="tools">
                        <span className="html">{challenge.tools}</span>
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
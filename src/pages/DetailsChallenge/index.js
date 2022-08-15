import React from "react";
import NavBar from '../../components/NavBar/navBar';

import './styles.css'

export default function DetailsChallenge(props) {

    // console.log(props.location.state)
    const level = ['Fácil', 'Médio', 'Difícil']
    const colorlevel = ['#6ABECD', '#AAD742', '#F1B604']

    const challenge = props.location.state

    console.log(challenge.description.replaceAll("\n", "<br/>"))

    return (
        <section className="details">
            <NavBar isHome={false}/>
            <div className="body-details">
                <div className="body-details-left">
                    <img src={`http://localhost:5000/${challenge.image}`} width="634" height="434" />
                </div>
                <div className="body-details-right">
                    <h1>{challenge.title}</h1>
                    <div className="span-tools">
                        <div className="tools">
                            {challenge.tools.split(',').map((value, index) => (
                                <span className="html" key={index}>{value}</span>
                            ))}
                        </div>
                        <div className="level" style={{backgroundColor: colorlevel[challenge.level - 1]}}>
                            <span>{challenge.level}</span>
                            <p>{level[challenge.level - 1]}</p>
                        </div>
                    </div>
                    <div className="detail-descrition">
                        {challenge.description.split('\n').map((value, index) => (
                            <p key={index}>{value} <br/></p>
                            
                        ))}
                    </div>
                    {/* <p className="detail-descrition">{challenge.description.replaceAll("\n", "<br/>")}</p> */}
                    <div className="colors">
                        {challenge.colors.split(',').map((value, index) => (
                            <div className="color" style={{backgroundColor: value}}></div>
                        ))}
                    </div>
                    <div className="fonts">
                        {challenge.fonts.split(',').map((value, index) => (
                            <span>{value}</span>
                        ))}
                    </div>

                    <p>{challenge.assets}</p>
                    <button>Enviar Solução</button>
                </div>
            </div>
        </section>
    )
}
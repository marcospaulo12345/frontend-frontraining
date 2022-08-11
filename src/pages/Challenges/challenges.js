import React from "react";
import CardChallenger from "../../components/CardChallenger/cardChallenger";
import NavBar from "../../components/NavBar/navBar";
import history from "../../history";

import "./styles.css"

export default function Challenges() {
    return(
        <section className="challenge">
            <NavBar isHome={false} />

            <div className="line-top">
                <h1>Desafios</h1>
                <span id='line'></span>
                <button onClick={() => history.push('/criar/desafio')}>Criar Desafio</button>
            </div>

            <div className="list-challenger">
                <CardChallenger />
                <CardChallenger />
                <CardChallenger />
                <CardChallenger />
                <CardChallenger />
            </div>
        </section>
    )
}
import React from "react";
import NavBar from "../../components/NavBar/navBar";

import CardSolution from "../../components/CardSolution/cardSolution";

import './styles.css'

export default function Solutions() {
    return (
        <section className="solutions-body">
            <NavBar isHome={false} />
            <div className="line-top">
                <h1>Soluções Recentes</h1>
                <span></span>
            </div>
            <div className="list-solutions">
                <CardSolution />
                <CardSolution />
                <CardSolution />
                <CardSolution />
            </div>
        </section>
    )
}
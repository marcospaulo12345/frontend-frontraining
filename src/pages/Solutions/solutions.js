import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/navBar";
import api from "../../api";

import CardSolution from "../../components/CardSolution/cardSolution";

import './styles.css'

export default function Solutions() {
    const [solutions, setSolutions] = useState([]);

    async function getSolution() {
        await api.get('/solution').then(response => {
            setSolutions(response.data.solutions)
        })
    }

    useEffect(() => {
        getSolution();
    }, [])

    return (
        <section className="solutions-body">
            <NavBar isHome={false} />
            <div className="line-top">
                <h1>Soluções Recentes</h1>
                <span></span>
            </div>
            <div className="list-solutions">
                {solutions.map((value, index) => (
                    <div key={index}>
                        <CardSolution solution={value} />
                    </div>
                ))}
            </div>
        </section>
    )
}
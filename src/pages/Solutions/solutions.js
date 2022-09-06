import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/navBar";
import api from "../../api";

import CardSolution from "../../components/CardSolution/cardSolution";

import NotFound from '../../assets/images/not_found.svg';

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
                {solutions.length === 0 ? (
                    <div className="not-found">
                        <img src={NotFound} className="image-not-found"/>
                        <h1>Nenhuma solução encontrada!</h1>
                    </div>
                ): (
                    <>
                        {solutions.map((value, index) => (
                            <div key={index}>
                                <CardSolution solution={value} />
                            </div>
                        ))}
                    </>
                )}
            </div>
        </section>
    )
}
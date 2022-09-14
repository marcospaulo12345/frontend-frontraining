import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/navBar";
import api from "../../api";

import CardSolution from "../../components/CardSolution/cardSolution";

import NotFound from '../../assets/images/not_found.svg';

import './styles.css'
import Pagination from "../../components/Pagination";

const LIMIT = 9;

export default function Solutions() {
    const [solutions, setSolutions] = useState([]);
    const [offset, setOffset] = useState(0);
    const [count, setCount] = useState(0);

    async function getSolution() {
        await api.get(`/solution?limit=${LIMIT}&offset=${offset}`).then(response => {
            setSolutions(response.data.solutions.rows);
            setCount(response.data.solutions.count);
        })
    }

    useEffect(() => {
        getSolution();
    }, [offset])

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
            <Pagination limit={LIMIT} total={count} offset={offset} setOffset={setOffset}/>
        </section>
    )
}
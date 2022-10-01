import React, { useEffect, useState } from "react";
import api from "../../api";
import CardChallenger from "../../components/CardChallenger/cardChallenger";
import NavBar from "../../components/NavBar/navBar";
import history from "../../history";
import NotFound from '../../assets/images/not_found.svg';
import Pagination from "../../components/Pagination";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styles.css";

const LIMIT = 9;

export default function Challenges() {
    const [challenges, setChallenges] = useState([]);
    const [search, setSearch] = useState('');
    const [offset, setOffset] = useState(0);
    const [count, setCount] = useState(0);
    
    async function getChallenges() {
        await api.get(`/challenge?limit=${LIMIT}&offset=${offset}`).then(response => {
            setChallenges(response.data.challenges.rows)
            setCount(response.data.challenges.count)
        })
    }

    useEffect(() => {
        getChallenges()
    }, [offset]);

    useEffect(() => {
        if(search){
            api.post('/challenge/search', {
                search: search,
            }).then(response => {
                setChallenges(response.data.challenges)
            })
        } else {
            getChallenges()
        }
    }, [search])    

    return(
        <section className="challenge">
            <NavBar isChallenge={true} setSearch={setSearch}/>
            <ToastContainer />
            <div className="line-top">
                <h1>Desafios</h1>
                <span id='line'></span>
                <button onClick={() => history.push('/criar/desafio')}>Criar Desafio</button>
            </div>

            <div className="list-challenger">
                {challenges.length === 0 ? (
                    <div className="not-found">
                        <img src={NotFound} className="image-not-found"/>
                        <h1 className="title-not-found">Nenhum desafio encontrado!</h1>
                    </div>
                ): (
                    <>
                        {challenges.map((value, index) => (
                            <div key={index} data-testid={`test-items-${index}`} >
                                <CardChallenger challenge={value}/>
                            </div>
                        ))}
                    </>
                )}
                
            </div>
            <Pagination limit={LIMIT} total={count} offset={offset} setOffset={setOffset}/>
        </section>
    )
}
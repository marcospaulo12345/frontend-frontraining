import React, { useEffect, useState } from "react";
import api from "../../api";
import CardChallenger from "../../components/CardChallenger/cardChallenger";
import NavBar from "../../components/NavBar/navBar";
import history from "../../history";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styles.css"

export default function Challenges() {
    const [challenges, setChallenges] = useState([]);
    const [search, setSearch] = useState('');
    
    async function getChallenges() {
        await api.get('/challenge').then(response => {
            setChallenges(response.data.challenges)
        })
    }

    useEffect(() => {
        getChallenges()
    }, []);

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
                {challenges.map((value, index) => (
                    <div key={index}>
                        <CardChallenger challenge={value}/>
                    </div>
                ))}
            </div>
        </section>
    )
}
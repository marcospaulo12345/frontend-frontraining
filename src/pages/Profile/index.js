import React, { useContext, useEffect, useState } from "react";
import NavBar from "../../components/NavBar/navBar";
import api from "../../api";

import './styles.css'
import { Context } from "../../Context/authContext";
import CardChallenger from "../../components/CardChallenger/cardChallenger";
import CardSolution from "../../components/CardSolution/cardSolution";

export default function Profile({userId=true}) {
    const [challenges, setChallenges] = useState([]);
    const [solutions, setSolutions] = useState([]);

    const {user} = useContext(Context)

    async function getChallenges() {
        if(user?.id){
            const challenges = await api.get(`challenge/user/${user.id}`)
            setChallenges(challenges.data.challenges)
        }
    }

    function handleMenu(index) {

        console.log(`menu-${index}`)
        document.getElementById(`menu-${index}`).style.display = 'flex'
    }

    async function getSolutions() {
        if(user?.id){
            const solutions = await api.get(`solution/user/${user.id}`)
            setSolutions(solutions.data.solutions)
        }
    }

    useEffect(() => {
        getChallenges();
        getSolutions();
    }, [user]);

    return (
        <section className="profile">
            <NavBar />
            <div className="profile-header">
                <div className="profile-header-left">
                    <div className="profile-icon">
                        <p>M</p>
                    </div>
                    <div className="profile-info">
                        <h1>Marcos Paulo</h1>
                        <h2>marcospaulo@gmail.com</h2>
                        <p>110 Pontos</p>
                    </div>
                </div>
                <div className="profile-header-right">
                    <button>Alterar Dados</button>
                </div>
            </div>
            <h3>Desafios Criados</h3>
            <div className="profile-challenges">
                {challenges.map((value, index) => (
                    <div key={index} className="profile-challenge-item">
                        <CardChallenger challenge={value} isUpgradable={true}/>
                    </div>
                ))}
            </div>
            <h3>Soluções Enviadas</h3>
            <div className="profile-solutions">
                {solutions.map((value, index) => (
                    <div key={index}>
                        <CardSolution solution={value} isUpgradable={true}/>
                    </div>
                ))}
            </div>
        </section>
    );
}
import React, { useContext, useEffect, useState } from "react";
import NavBar from "../../components/NavBar/navBar";
import api from "../../api";

import './styles.css'
import { Context } from "../../Context/authContext";
import CardChallenger from "../../components/CardChallenger/cardChallenger";
import CardSolution from "../../components/CardSolution/cardSolution";

export default function Profile(props) {
    const {user} = useContext(Context);

    const outUser = props.location?.state?.user;
    const userId = props.location?.state?.userId;

    const [challenges, setChallenges] = useState([]);
    const [solutions, setSolutions] = useState([]);
    const [refresh, setRefresh] = useState(false);


    async function getChallenges() {
        if(userId){
            const challenges = await api.get(`challenge/user/${userId}`)
            setChallenges(challenges.data.challenges)
        } else {
            // const challenges = await api.get(`challenge/user/3`)
            const challenges = await api.get(`challenge/user/${user.id}`)
            setChallenges(challenges.data.challenges)
        }
    }
    
    async function getSolutions() {
        if(userId) {
            const solutions = await api.get(`solution/user/${userId}`)
            setSolutions(solutions.data.solutions)
        } else {
            if(user?.id){
                const solutions = await api.get(`solution/user/${user.id}`)
                setSolutions(solutions.data.solutions)
            }
        }
    }

    
    useEffect(() => {
        getChallenges();
        getSolutions();
    }, [user, refresh]);
    
    return (
        <section className="profile">
            <NavBar />
            <div className="profile-header">
                <div className="profile-header-left">
                    <div className="profile-icon">
                        <p>{userId ? outUser.username[0].toUpperCase() : user?.username[0].toUpperCase()}</p>
                    </div>
                    <div className="profile-info">
                        <h1>{userId ? outUser.username :user?.username}</h1>
                        <h2>{userId ? outUser.email :user?.email}</h2>
                        <p>{userId ? outUser.score : user?.score} Pontos</p>
                    </div>
                </div>
                <div className="profile-header-right">
                    {userId ? null :<button>Alterar Dados</button>}
                </div>
            </div>
            <h3 className="title-items">Desafios Criados</h3>
            <div className="profile-challenges">
                {challenges.map((value, index) => (
                    <div key={index} className="profile-challenge-item" data-testid={`test-items-${index}`}>
                        <CardChallenger challenge={value} isUpgradable={userId ? false : true} setRefresh={setRefresh} refresh={refresh}/>
                    </div>
                ))}
            </div>
            <h3 className="title-items">Soluções Enviadas</h3>
            <div className="profile-solutions">
                {solutions.map((value, index) => (
                    <div key={index}c className="profile-solution-item">
                        <CardSolution solution={value} isUpgradable={userId ? false : true} setRefresh={setRefresh} refresh={refresh}/>
                    </div>
                ))}
            </div>
        </section>
    );
}
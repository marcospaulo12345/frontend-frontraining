import React, {useState} from "react";

import Page01 from '../../assets/images/page_01.jpg'
import history from "../../history";
import { returnColorTools } from "../../utils/tools";
import Modal from "../Modal";

import "./styles.css"

export default function CardChallenger({index, challenge, isUpgradable=false}) {
    const level = ['Fácil', 'Médio', 'Difícil']
    const colorlevel = ['#6ABECD', '#AAD742', '#F1B604']
    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function handleModal(e){
        e.preventDefault();
        setShowModal(true)
    }

    function removeChallenge() {
        console.log('desafio removido')
    }

    function handleDetails() {
        history.push({
            pathname: '/desafio/detalhes',
            state: challenge
        })
    }

    return(
        <div className="teste">
            {isUpgradable && (
                <>
                    <div className="card-points" onClick={() => setIsVisible(!isVisible)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="menu-option" style={{display: isVisible ? 'flex':'none'}}>
                        <button>Alterar</button>
                        <button onClick={(e)=>handleModal(e)}>Excluir</button>
                    </div>
                </>
            )}
            
            <section className="card" onClick={handleDetails}>
                
                <img src={`http://localhost:5000/${challenge.image}`} width="334" height="234" alt="Imagem Desafio"></img>
                <div className="card-body">
                    <h1 className="title">{challenge.title}</h1>

                    <div className="span-tools">
                        <div className="tools">
                            {challenge.tools.split(',').map((value, index) => (
                                <span className="html" key={index} style={{color: returnColorTools(value)}}>{value}</span>
                            ))}
                        </div>
                        <div className="level" style={{backgroundColor: colorlevel[challenge.level - 1]}}>
                            <span>{challenge.level}</span>
                            <p>{level[challenge.level - 1]}</p>
                        </div>
                    </div>
                    <p className="describe">{challenge.description}</p>
                </div>

                
            </section>
            {showModal && <Modal setShowModal={setShowModal} remove={removeChallenge} menssage={'Desafio'}/>}
        </div>
    )
}
import React, {useState} from "react";
import api from "../../api";

import Page01 from '../../assets/images/page_01.jpg'
import history from "../../history";
import { returnColorTools } from "../../utils/tools";
import Modal from "../Modal";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styles.css"

export default function CardChallenger({index, challenge, isUpgradable=false, setRefresh, refersh}) {
    const level = ['Fácil', 'Médio', 'Difícil']
    const colorlevel = ['#6ABECD', '#AAD742', '#F1B604']
    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const notify = (status, mensage) => {
        if (status === 200) {
          toast.success(mensage);
        } else if (status===400){
          toast.error(mensage);
        }
    };

    function handleModal(e){
        e.preventDefault();
        setShowModal(true)
    }

    function updateChallenge(e) {
        e.preventDefault();
        console.log('jhsdkfh')
        history.push({
            pathname: 'criar/desafio',
            state: challenge
        })
    }

    function removeChallenge() {
        api.delete(`challenge/${challenge.id}`).then(response => {
            setIsVisible(false);
            setRefresh(!refersh);
            notify(200, response.data.message);
        }).catch(response => {
            console.log(response.response.data.message);
            notify(400, response.response.data.message);
            setRefresh(!refersh);
            setIsVisible(false);
        })
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
                        <button onClick={(e) => updateChallenge(e)}>Alterar</button>
                        <button onClick={(e)=>handleModal(e)}>Excluir</button>
                    </div>
                </>
            )}
            
            <section className="card" onClick={handleDetails}>
                <div className="card-image">
                    <img src={`http://52.67.122.192:5000/${challenge.image}`} width="334" height="234" alt="Imagem Desafio"></img>
                </div>
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
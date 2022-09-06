import React,{useState} from "react";
import api from "../../api";

import landingpage from '../../assets/images/page_01.jpg';
import history from "../../history";
import { difHours } from "../../utils/tools";

import { returnColorTools } from "../../utils/tools";
import Modal from "../Modal";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css';

export default function CardSolution({solution, isUpgradable=false, setRefresh}) {
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

    function updateSolution(e) {
        e.preventDefault()
        history.push({
            pathname: 'criar/solucao',
            state2: solution
        })
    }


    function removeSolution() {
        api.delete(`solution/${solution.id_solution}`).then(response => {
            console.log(response);
            notify(200, response.data.message);
            setRefresh(true);
            setIsVisible(false);
        })
    }

    function handleDetailSolution() {
        history.push({
            pathname: "/detalhes/solucao",
            state: solution
        })
    }

    return (
        <div className="teste">
            {isUpgradable && (
                <>
                    <div className="card-points" onClick={() => setIsVisible(!isVisible)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="menu-option" style={{display: isVisible ? 'flex':'none'}}>
                        <button onClick={(e) => updateSolution(e)}>Alterar</button>
                        <button onClick={(e)=>handleModal(e)}>Excluir</button>
                    </div>
                </>
            )}
            <div className="card-solution" onClick={() => handleDetailSolution()}>
                <img src={`http://localhost:5000/${solution.image}`} width='334' height='224'/>
                <div className="solution-body">
                    <h1 className="title-solution">{solution.title}</h1>

                    <div className="tools-solution">
                        {solution.challenge.tools.split(',').map((value, index) =>(
                            <p key={index} style={{color: returnColorTools(value)}}>{value}</p>
                        ))}
                    </div>

                    <div className="user-solution">
                        <div className="info-user">
                            <div className="user-solution-icon">M</div>
                            <div className="user-solution-info">
                                <h2>{solution.user.username}</h2>
                                <h3>{solution.user.email}</h3>
                                <h4>Enviado a {difHours(solution.updatedAt)} hora atrás</h4>
                            </div>
                        </div>
                        <div className="user-points">
                            {solution.user.score}
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <Modal setShowModal={setShowModal} remove={removeSolution} menssage={'Solução'}/>}
        </div>
    )
}
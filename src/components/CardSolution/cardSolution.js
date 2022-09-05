import React,{useState} from "react";

import landingpage from '../../assets/images/page_01.jpg';
import history from "../../history";
import { difHours } from "../../utils/tools";

import { returnColorTools } from "../../utils/tools";

import './styles.css';

export default function CardSolution({solution, isUpgradable=false}) {
    const [isVisible, setIsVisible] = useState(false);

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
                        <button>Alterar</button>
                        <button>Excluir</button>
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
        </div>
    )
}
import React from "react";
import NavBar from '../../components/NavBar/navBar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css'

import Copy from '../../assets/images/copy.png';
import Out from '../../assets/images/out.png'

export default function DetailsChallenge(props) {

    const notify = (status, mensage) => {
        if (status === 200) {
          toast.success(mensage);
        } else if (status===400){
          toast.error(mensage);
        }
      };

    // console.log(props.location.state)
    const level = ['Fácil', 'Médio', 'Difícil']
    const colorlevel = ['#6ABECD', '#AAD742', '#F1B604']

    const challenge = props.location.state

    function copy(value) {
        navigator.clipboard.writeText(value);
        notify(200, value)
    }

    return (
        <section className="details">
            <NavBar isHome={false}/>
            <div className="body-details">
                <div className="body-details-left">
                    <img src={`http://localhost:5000/${challenge.image}`}  />
                </div>
                <div className="body-details-right">
                    <h1>{challenge.title}</h1>
                    <div className="span-tools">
                        <div className="tools">
                            {challenge.tools.split(',').map((value, index) => (
                                <span className="html" key={index}>{value}</span>
                            ))}
                        </div>
                        <div className="level" style={{backgroundColor: colorlevel[challenge.level - 1]}}>
                            <span>{challenge.level}</span>
                            <p>{level[challenge.level - 1]}</p>
                        </div>
                    </div>
                    <div className="detail-descrition">
                        {challenge.description.split('\n').map((value, index) => (
                            <p key={index}>{value} <br/></p>
                            
                        ))}
                    </div>
                    {/* <p className="detail-descrition">{challenge.description.replaceAll("\n", "<br/>")}</p> */}
                    <h2>Cores</h2>
                    <div className="colors">
                        {challenge.colors.split(',').map((value, index) => (
                            <div className="color" style={{backgroundColor: value}} onClick={() => copy(value)}>
                                <img src={Copy} width='20' height='20'/>
                            </div>
                        ))}
                    </div>
                    <h2>Fontes</h2>
                    <div className="fonts">
                        {challenge.fonts.split(',').map((value, index) => (
                            <div className="font" onClick={() => copy(value)}>
                                <p>{value}</p>
                                <img src={Copy} width='20' height='20'/>
                            </div>
                        ))}
                    </div>
                    <h2>Assets</h2>
                    <div className="assets">
                        <a href={challenge.assets} target="_blank">{challenge.assets}</a>
                        <img src={Out} width='18' height='18'/>
                    </div>
                    <button>Enviar Solução</button>
                </div>
            </div>
        </section>
    )
}
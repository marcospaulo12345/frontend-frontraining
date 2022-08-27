import React from "react";
import NavBar from "../../components/NavBar/navBar";

import './styles.css'

export default function Profile() {
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

            </div>
            <h3>Soluções Enviadas</h3>
            <div className="profile-solutions">
                
            </div>
        </section>
    );
}
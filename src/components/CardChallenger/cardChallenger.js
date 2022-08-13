import React from "react";

import Page01 from '../../assets/images/page_01.jpg'

import "./styles.css"

export default function CardChallenger() {
    return(
        <section className="card">
            <img src={Page01} width="334" height="234" alt="Imagem Desafio"></img>
            <div className="card-body">
                <h1 className="title">NFT preview card component</h1>

                <div className="span-tools">
                    <div>
                        <span className="html">HTML</span>
                        <span className="css">CSS</span>
                    </div>
                    <p>Facil</p>
                </div>
                <p className="describe">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I.</p>
            </div>

            
        </section>
    )
}
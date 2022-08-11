import React, { useState } from "react";

import NavBar from "../../components/NavBar/navBar.js";
import Dropzone from "../../components/DropZone/dropZone.js";

import "./styles.css"
import InputColors from "../../components/InputColors/inputColors.js";

export default function CreateChallege() {
    const [selectedFile, setSelectedFile] = useState();


    return (
        <section className="create-challenge">
            <NavBar isHome={false}/>

            <form>
                <div className="form-left">
                    <Dropzone onFileUploaded={setSelectedFile} />
                </div>
                <div className="form-right">
                    <input type="text" placeholder="Título do desafio"></input>
                    <input type="textarea" placeholder="Descrição do desafio"></input>
                    <input type="text" placeholder="Título do desafio"></input>
                    <input type="text" placeholder="Fontes"></input>
                    <InputColors />
                    <select name="level" >
                        <option value="0">Nível</option>
                        <option value="1">Fácil</option>
                        <option value="2">Médio</option>
                        <option value="3">Difícil</option>
                    </select>
                </div>

            </form>
        </section>
    )
}
import React, { useEffect, useState } from "react";


import NavBar from "../../components/NavBar/navBar.js";
import Dropzone from "../../components/DropZone/dropZone.js";
import "./styles.css"
import InputColors from "../../components/InputColors/inputColors.js";
import InputFonts from "../../components/InputFonts/inputFontes.js";
import InputTools from "../../components/InputTools/inputTools.js";

export default function CreateChallege() {
    const [selectedFile, setSelectedFile] = useState();
        

    return (
        <section className="create-challenge">
            <NavBar isHome={false}/>
            <form>
                <div className="form-left">
                    <label>Imagem*</label>
                    <Dropzone onFileUploaded={setSelectedFile} />
                </div>
                <div className="form-right">
                    <label htmlFor="title">Título</label>
                    <input type="text" placeholder="Título do desafio" name="title" id="title" className="input-normal"></input>

                    <label htmlFor="description">Descrição</label>
                    <textarea placeholder="Descrição do desafio" id="description"></textarea>

                    <label>Cores</label>
                    <InputColors />

                    <label htmlFor="level">Nível</label>
                    <select name="level" id="level">
                        <option value="0">Nível</option>
                        <option value="1">Fácil</option>
                        <option value="2">Médio</option>
                        <option value="3">Difícil</option>
                    </select>

                    <label>Fontes</label>
                    <InputFonts />

                    <label>Ferramentas</label> 
                    <InputTools />

                    <label htmlFor="assets">Assets</label>
                    <input type='text' placeholder="Link para os assets" id="assets" className="input-normal"/>
                    
                    <button>Enviar</button>
                </div>
            </form> 
        </section>
    )
}
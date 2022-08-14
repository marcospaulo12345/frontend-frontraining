import React, { useEffect, useState, useContext } from "react";
import api from "../../api.js";

import NavBar from "../../components/NavBar/navBar.js";
import Dropzone from "../../components/DropZone/dropZone.js";
import "./styles.css"
import InputColors from "../../components/InputColors/inputColors.js";
import InputFonts from "../../components/InputFonts/inputFontes.js";
import InputTools from "../../components/InputTools/inputTools.js";

import { Context } from "../../Context/authContext.js";

export default function CreateChallege() {
    const [selectedFile, setSelectedFile] = useState();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [blockPickerColor, setBlockPickerColor] = useState([]);
    const [level, setLevel] = useState('');
    const [selectFont, setSelectFont] = useState([]);
    const [selectedTool, setSelectedTool] = useState([]);
    const [assets, setAssets] = useState('');

    const {user} = useContext(Context);
    
    async function handleSubmit(e) {
        e.preventDefault();
        let data = new FormData(); 

        data.append('title', title);
        data.append('description', description);
        data.append('colors', blockPickerColor.toString());
        data.append('level', level);
        data.append('fonts', selectFont.toString());
        data.append('tools', selectedTool.toString());
        data.append('assets', assets);
        data.append('userId', user.id)

        if(selectedFile){
            data.append('image', selectedFile);
        }

        await api.post('challenge', data)
    }

    return (
        <section className="create-challenge">
            <NavBar isHome={false}/>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-left">
                    <label>Imagem*</label>
                    <Dropzone onFileUploaded={setSelectedFile} />
                </div>
                <div className="form-right">
                    <label htmlFor="title">Título</label>
                    <input 
                        type="text" 
                        placeholder="Título do desafio" 
                        name="title" 
                        id="title" 
                        className="input-normal"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>

                    <label htmlFor="description" className="description">Descrição</label>
                    <textarea 
                        placeholder="Descrição do desafio" 
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>

                    <div className="color-level">
                        <div className="color-div">
                            <label>Cores</label>
                            <InputColors blockPickerColor = {blockPickerColor} setBlockPickerColor = {setBlockPickerColor} />
                        </div>
                        <div className="level-div">
                            <label htmlFor="level">Nível</label>
                            <select 
                                name="level" 
                                id="level"
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                            >
                                <option value="0">Nível</option>
                                <option value="1">Fácil</option>
                                <option value="2">Médio</option>
                                <option value="3">Difícil</option>
                            </select>
                        </div>
                    </div>
                    <div className="fonts-tools">
                        <div className="font-div">
                            <label>Fontes</label>
                            <InputFonts  selectFont={selectFont} setSelectFont = {setSelectFont}/>
                        </div>

                        <div>
                            <label>Ferramentas</label> 
                            <InputTools selectedTool={selectedTool} setSelectedTool = {setSelectedTool} />
                        </div>
                    </div>
                    <label htmlFor="assets">Assets</label>
                    <input 
                        type='text' 
                        placeholder="Link para os assets" 
                        id="assets" 
                        className="input-normal"
                        value={assets}
                        onChange={(e) => setAssets(e.target.value)}
                    />
                    
                    <button className="btn-submit">Enviar</button>
                </div>
            </form> 
        </section>
    )
}
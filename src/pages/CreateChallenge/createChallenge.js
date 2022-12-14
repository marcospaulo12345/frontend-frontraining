import React, { useEffect, useState, useContext } from "react";
import api from "../../api.js";
import history from "../../history.js";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from "../../components/NavBar/navBar.js";
import Dropzone from "../../components/DropZone/dropZone.js";
import "./styles.css"
import InputColors from "../../components/InputColors/inputColors.js";
import InputFonts from "../../components/InputFonts/inputFontes.js";
import InputTools from "../../components/InputTools/inputTools.js";

import { Context } from "../../Context/authContext.js";

export default function CreateChallege(props) {

    const challenge = props?.location?.state;

    const notify = (status, mensage) => {
        if (status === 200) {
          toast.success(mensage);
        } else if (status===400){
          toast.error(mensage);
        }
      };

    const [selectedFile, setSelectedFile] = useState(challenge?.image || '');
    const [title, setTitle] = useState(challenge?.title ?? '');
    const [description, setDescription] = useState(challenge?.description ?? '');
    const [blockPickerColor, setBlockPickerColor] = useState( challenge?.colors.split(',') ?? []);
    const [level, setLevel] = useState(challenge?.level ?? '');
    const [selectFont, setSelectFont] = useState(challenge?.fonts.split(',') ?? []);
    const [selectedTool, setSelectedTool] = useState(challenge?.tools.split(',') ?? []);
    const [assets, setAssets] = useState(challenge?.assets ?? '');

    const [mensage, setMensage] = useState({});

    const {user} = useContext(Context);

    useEffect(() => {
        setMensage({});
    }, [title, description, blockPickerColor, level, selectFont, selectedTool, assets, selectedFile])
    
    async function handleSubmit(e) {
        e.preventDefault();
        let data = new FormData(); 
        let error = false

        if (title===''){
            let updateValue = {'title': 'Este campoa é obrigatório!'}
            setMensage(mensage => ({
                ...mensage,
                ...updateValue
            }));
            error = true
        }
        if (description===''){
            let updateValue = {'description': 'Este campoa é obrigatório!'}
            setMensage(mensage => ({
                ...mensage,
                ...updateValue
            }));
            error = true
        }
        if (blockPickerColor.toString()===''){
            let updateValue = {'colors': 'Escolhe uma cor!'}
            setMensage(mensage => ({
                ...mensage,
                ...updateValue
            }));
            error = true
        }
        if (level==='' || level==='0'){
            let updateValue = {'level': 'Selecione o nível do desafio!'}
            setMensage(mensage => ({
                ...mensage,
                ...updateValue
            }));
            error = true
        }
        if (selectFont.toString() ===''){
            let updateValue = {'fonts': 'Escolha uma fonte!'}
            setMensage(mensage => ({
                ...mensage,
                ...updateValue
            }));
            error = true
        }
        if (selectedTool.toString()===''){
            let updateValue = {'tools': 'Selecione as ferramente para realizar o desafio!'}
            setMensage(mensage => ({
                ...mensage,
                ...updateValue
            }));
            error = true
        }
        if (assets === ''){
            let updateValue = {'assets': 'Informe um link com imagens ou icones utilizados no projeto!'}
            setMensage(mensage => ({
                ...mensage,
                ...updateValue
            }));
            error = true
        } else if (assets) {
            try {
                let url = new URL(assets)
            } catch(err) {
                let updateValue = {'assets': 'URL Inválida!'}
                setMensage(mensage => ({
                    ...mensage,
                    ...updateValue
                }));
                error = true
            }
        }
        if (!selectedFile){
            let updateValue = {'image': 'Escolhe uma imagem do desafio!'}
            setMensage(mensage => ({
                ...mensage,
                ...updateValue
            }));
            error = true
        }

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

        if (error===false){
            if(challenge){
                await api.put(`challenge/${challenge?.id}`, data).then(response => {
                    notify(200, "Desafio alterado com sucesso");
                    history.push('/desafios')
                }).catch(response => {
                    notify(400, response.response.data.message);
                })
            } else {
                await api.post('challenge', data).then(response => {
                    notify(200, "Desafio criado com sucesso");
                    history.push('/desafios')
                }).catch(response => {
                    let updateValue = {'serverErro': 'Escolhe uma imagem do desafio!'}
                    setMensage(mensage => ({
                        ...mensage,
                        ...response.response.data
                    }));
                    error = true
                })
            }
        }

    }

    return (
        <section className="create-challenge">
            <NavBar isHome={false}/>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-left">
                    <label>Imagem*</label>
                    <Dropzone onFileUploaded={setSelectedFile} image={challenge?.image} />
                    {mensage.image && <span className="error-mensage">{mensage.image}</span>}
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
                    {mensage.title && <span className="error-mensage">{mensage.title}</span>}

                    <label htmlFor="description" className="description">Descrição</label>
                    <textarea 
                        placeholder="Descrição do desafio" 
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    {mensage.description && <span className="error-mensage">{mensage.description}</span>}

                    <div className="color-level">
                        <div className="color-div">
                            <label>Cores</label>
                            <InputColors blockPickerColor = {blockPickerColor} setBlockPickerColor = {setBlockPickerColor} />
                            {mensage.colors && <span className="error-mensage">{mensage.colors}</span>}

                        </div>
                        <div className="level-div">
                            <label htmlFor="level">Nível</label>
                            <select 
                                name="level" 
                                id="level"
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                            >
                                <option value="0">Selecione o nível</option>
                                <option value="1">Fácil</option>
                                <option value="2">Médio</option>
                                <option value="3">Difícil</option>
                            </select>
                            {mensage.level && <span className="error-mensage">{mensage.level}</span>}
                        </div>
                    </div>
                    <div className="fonts-tools">
                        <div className="font-div">
                            <label>Fontes</label>
                            <InputFonts  selectFont={selectFont} setSelectFont = {setSelectFont}/>
                            {mensage.fonts && <span className="error-mensage">{mensage.fonts}</span>}
                        </div>

                        <div className="tools-div">
                            <label>Ferramentas</label> 
                            <InputTools selectedTool={selectedTool} setSelectedTool = {setSelectedTool} />
                            {mensage.tools && <span className="error-mensage">{mensage.tools}</span>}
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
                    {mensage.assets && <span className="error-mensage">{mensage.assets}</span>}
                    {mensage.message && <span className="error-mensage">{mensage.message}</span>}
                    
                    {challenge 
                        ? <button className="btn-submit">Atualizar</button>
                        : <button className="btn-submit">Enviar</button>
                    }
                </div>
            </form> 
        </section>
    )
}
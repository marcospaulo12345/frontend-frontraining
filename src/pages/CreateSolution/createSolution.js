import React, {useContext, useState} from "react";
import api from "../../api";

import Dropzone from "../../components/DropZone/dropZone";
import NavBar from '../../components/NavBar/navBar';

import { Context } from "../../Context/authContext";

import './styles.css'

export default function CreateSolution(props) {
    const challenge = props.location.state
    const [selectedFile, setSelectedFile] = useState();
    const [title, setTitle] = useState('');
    const [linkRepo, setLinkRepo] = useState('');
    const [linkSite, setLinkSite] = useState('');

    const {user} = useContext(Context)

    async function handleSubmit(e) {
        e.preventDefault();
        
        let data = new FormData(); 

        data.append('challengeId', challenge.id_challenge)
        data.append('userId', user.id)
        data.append('title', title)
        data.append('repository', linkRepo)
        data.append('site', linkSite)

        if(selectedFile){
            data.append('image', selectedFile);
        }

        await api.post('solution', data).then(response => {
            console.log(response);
        }).catch(response => {
            console.log(response)
        })
    }

    return (
        <section className="create-solution">
            <NavBar isHome={false} />
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-left">
                    <Dropzone onFileUploaded={setSelectedFile} />
                </div>
                <div className="form-right">
                    <div>
                        <label>Título</label>
                        <p>Inclua algumas das ferramentas e técnicas que você usou para completar o desafio.</p>
                        <input 
                            type='text' 
                            placeholder='Por exemplo, Card responsivo usando Bootstrap'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Link do Repositório</label>
                        <input 
                            type='text' 
                            placeholder="Ex: https://myrepository.com"
                            value={linkRepo}
                            onChange={(e) => setLinkRepo(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Link do Site</label>
                        <input 
                            type='text' 
                            placeholder="Ex: https://myrepository.com"
                            value={linkSite}
                            onChange={(e) => setLinkSite(e.target.value)}
                        />
                    </div>
                    <div>
                        <h1>Observação</h1>
                        <p>Ao enviar sua solução o sistema realizara uma validação da solução enviada, então  mantenha sua solução mais próxima o possível da apresentada no desafio, quanto mais próxima da solução mais pontos você ganha.</p>
                    </div>
                    <button>Enviar Solução</button>
                </div>
            </form>
        </section>
    );
}
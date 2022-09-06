import React, {useContext, useState, useEffect} from "react";
import api from "../../api";
import history from "../../history";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dropzone from "../../components/DropZone/dropZone";
import NavBar from '../../components/NavBar/navBar';

import { Context } from "../../Context/authContext";

import './styles.css'

export default function CreateSolution(props) {
    const challenge = props.location.state;
    const solution = props.location.state2;

    const [selectedFile, setSelectedFile] = useState();
    const [title, setTitle] = useState(solution?.title ?? '');
    const [linkRepo, setLinkRepo] = useState(solution?.repository ?? '');
    const [linkSite, setLinkSite] = useState(solution?.site ?? '');

    const [mensage, setMensage] = useState({});

    const {user} = useContext(Context);

    const notify = (status, mensage) => {
        if (status === 200) {
          toast.success(mensage);
        } else if (status===400){
          toast.error(mensage);
        }
      };

    useEffect(() => {
        setMensage({});
    }, [title, linkRepo, linkSite, selectedFile])
    
    
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
        if (linkRepo === ''){
            let updateValue = {'repository': 'Informe um link com o repositório da solução!'}
            setMensage(mensage => ({
                ...mensage,
                ...updateValue
            }));
            error = true
        } else if (linkRepo) {
            try {
                let url = new URL(linkRepo)
            } catch(err) {
                let updateValue = {'repository': 'URL Inválida!'}
                setMensage(mensage => ({
                    ...mensage,
                    ...updateValue
                }));
                error = true
            }
        }
        if (linkSite === ''){
            let updateValue = {'site': 'Informe um link com o site da solução!'}
            setMensage(mensage => ({
                ...mensage,
                ...updateValue
            }));
            error = true
        } else if (linkSite) {
            try {
                let url = new URL(linkSite)
            } catch(err) {
                let updateValue = {'site': 'URL Inválida!'}
                setMensage(mensage => ({
                    ...mensage,
                    ...updateValue
                }));
                error = true
            }
        }
        if (!selectedFile){
            let updateValue = {'image': 'Escolhe uma imagem para a solução!'}
            setMensage(mensage => ({
                ...mensage,
                ...updateValue
            }));
            error = true
        }

        if(solution){
            data.append('challengeId', solution?.challenge?.id_challenge)
        } else {
            data.append('challengeId', challenge.id_challenge)
        }
        data.append('userId', user.id)
        data.append('title', title)
        data.append('repository', linkRepo)
        data.append('site', linkSite)

        if(selectedFile){
            data.append('image', selectedFile);
        }

        if(error === false){
            if(solution) {
                await api.put(`solution/${solution?.id_solution}`, data).then(response => {
                    console.log(response);
                    notify(200, "Solução alterada com sucesso");
                    history.push('/solucoes')
                }).catch(response => {
                    console.log(response)
                })
            } else {
                await api.post('solution', data).then(response => {
                    console.log(response);
                    notify(200, "Solução criado com sucesso");
                    history.push('/solucoes')
                }).catch(response => {
                    console.log(response)
                })
            }
        }
    }

    return (
        <section className="create-solution">
            <NavBar isHome={false} />
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-left">
                    <Dropzone onFileUploaded={setSelectedFile} />
                    {mensage.image && <span className="error-mensage">{mensage.image}</span>}
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
                        {mensage.title && <span className="error-mensage">{mensage.title}</span>}

                    </div>
                    <div>
                        <label>Link do Repositório</label>
                        <input 
                            type='text' 
                            placeholder="Ex: https://myrepository.com"
                            value={linkRepo}
                            onChange={(e) => setLinkRepo(e.target.value)}
                        />
                        {mensage.repository && <span className="error-mensage">{mensage.repository}</span>}
                    </div>
                    <div>
                        <label>Link do Site</label>
                        <input 
                            type='text' 
                            placeholder="Ex: https://myrepository.com"
                            value={linkSite}
                            onChange={(e) => setLinkSite(e.target.value)}
                        />
                        {mensage.site && <span className="error-mensage">{mensage.site}</span>}
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
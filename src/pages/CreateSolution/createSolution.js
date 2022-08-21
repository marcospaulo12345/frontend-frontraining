import React, {useState} from "react";

import Dropzone from "../../components/DropZone/dropZone";
import NavBar from '../../components/NavBar/navBar';

import './styles.css'

export default function CreateSolution() {
    const [selectedFile, setSelectedFile] = useState();

    return (
        <section className="create-solution">
            <NavBar isHome={false} />
            <form>
                <div className="form-left">
                    <Dropzone onFileUploaded={setSelectedFile} />
                </div>
                <div className="form-right">
                    <div>
                        <label>Título</label>
                        <p>Inclua algumas das ferramentas e técnicas que você usou para completar o desafio.</p>
                        <input type='text' placeholder='Por exemplo, Card responsivo usando Bootstrap'/>
                    </div>
                    <div>
                        <label>Link do Repositório</label>
                        <input type='text' placeholder="Ex: https://myrepository.com"/>
                    </div>
                    <div>
                        <label>Link do Site</label>
                        <input type='text' placeholder="Ex: https://myrepository.com"/>
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
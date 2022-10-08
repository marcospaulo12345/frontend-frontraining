import React, {useContext, useState} from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Context } from "../../Context/authContext";

import Logo from '../../assets/images/logo.png'
import imageReview from '../../assets/images/imagemReview.svg'
import history from "../../history";

import './styles.css'
import { useParams } from "react-router-dom";
import api from "../../api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// const schema = yup.object().shape({
//     email: yup.string().required('Esse campo é obrigatório'),
//     password: yup.string().required('Esse campo é obrigatório'),
// }).required();

export default function ResetPassword(props){
    const token = useParams();

    const notify = (status, mensage) => {
        if (status === 200) {
          toast.success(mensage);
        } else if (status===400){
          toast.error(mensage);
        }
      };

    const [password, setPassword] = useState('');

    function resetPassword(e){
        e.preventDefault();
        api.post(`user/reset_password/${token.token}`, {
            password
        }).then(response => {
            notify(200, "Senha alterada com sucesso!")
            history.push('/login')
        })
    }

    return(
        <div id='forgot_password_email'>
            <div id='forgot_password_email-body'>
                <div id='forgot_password_email-body-left'>
                    <header>
                        <img src={Logo} onClick={() => history.push('/')} alt='Logo'></img>
                    </header>
                    
                    <form onSubmit={resetPassword}>
                        <div id="title-forgot_password_email">
                            <h1>Nova senha</h1>
                            <h3>Informe um nova senha para se autenticar no sistema</h3>
                        </div>
                        <div className='inputSpan'>
                            <input 
                                placeholder='Nova senha' 
                                title="password" 
                                name='password' 
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type='submit'>Enviar</button>
                    </form>
                </div>
                <div id='forgot_password_email-body-right'>
                    <img src={imageReview} alt=''/>
                </div>
            </div>
        </div>
    );
}
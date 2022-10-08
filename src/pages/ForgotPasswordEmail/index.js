import React, {useContext, useState} from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Context } from "../../Context/authContext";

import Logo from '../../assets/images/logo.png'
import imageReview from '../../assets/images/imagemReview.svg'
import history from "../../history";

import './styles.css'
import api from "../../api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// const schema = yup.object().shape({
//     email: yup.string().required('Esse campo é obrigatório'),
//     password: yup.string().required('Esse campo é obrigatório'),
// }).required();

export default function ForgotPasswordEmail(){
    const [email, setEmail] = useState('');

    const notify = (status, mensage) => {
        if (status === 200) {
          toast.success(mensage);
        } else if (status===400){
          toast.error(mensage);
        }
      };
    
    function SendEmail(e) {
        e.preventDefault();
        api.post('user/forgot_password', {
            email
        }).then(response => {
            notify(200, "Verifique sua caixa de email para altualizar a senha!")
        })
    }

    return(
        <div id='forgot_password_email'>
            <div id='forgot_password_email-body'>
                <div id='forgot_password_email-body-left'>
                    <header>
                        <img src={Logo} onClick={() => history.push('/')} alt='Logo'></img>
                    </header>
                    
                    <form onSubmit={SendEmail}>
                        <div id="title-forgot_password_email">
                            <h1>Esqueceu a Senha?</h1>
                            <h3>Informe o e-mail cadastrado no sisetma. Entraremos em contato para que possa alterar a sua senha.</h3>
                        </div>
                        <div className='inputSpan'>
                            <input 
                                placeholder='Email' 
                                title="email" 
                                name='email' 
                                type='text'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
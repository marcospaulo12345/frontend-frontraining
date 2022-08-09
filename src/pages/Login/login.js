import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Context } from "../../Context/authContext";

import Logo from '../../assets/images/logo.png'
import imageReview from '../../assets/images/imagemReview.svg'

import './styles.css'


const schema = yup.object().shape({
    email: yup.string().required('Esse campo é obrigatório'),
    password: yup.string().required('Esse campo é obrigatório'),
}).required();

export default function Login(){
    const {register, handleSubmit, setError, clearErrors, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const { handleLogin } = useContext(Context);
    //console.log(authenticated);

    function authenticate(data,e) {
        e.preventDefault();
        console.log(data);
        handleLogin({"email": data.email, "password": data.password}).catch(response => {
            setError('apiError', {message: response.message});
        });
    }

    return(
        <div id='login'>
            <div id='login-body'>
                <div id='login-body-left'>
                    <header>
                        <img src={Logo} alt='Logo'></img>
                    </header>
                    
                    <form onSubmit={handleSubmit(authenticate)}>
                        <div id="title-login">
                            <h1>Fazer Login</h1>
                            <h3>Preencha todos os campos abaixo para entrar.</h3>
                        </div>
                        <div className='inputSpan'>
                            <input 
                                placeholder='Email' 
                                title="email" 
                                name='email' 
                                type='text'
                                {...register('email')}
                            />
                            {errors.email && <span><b>Erro:</b> {errors.email.message}</span>}
                        </div>

                        <div className='inputSpan'>
                            <input 
                                placeholder='Senha' 
                                title="password"  
                                name='password' 
                                type='password'
                                {...register('password')}
                            />
                            {errors.password && <span><b>Erro:</b> {errors.password.message}</span>}
                        </div>
                        {errors.apiError && <span id='apiSpan'><b>Erro:</b> {errors.apiError.message}</span>}
                        <button type='submit' onClick={() => clearErrors()}>Entrar</button>

                        <h3>Não possui uma conta?</h3>
                        <Link to="/cadastro">clique aqui</Link>
                    </form>
                </div>
                <div id='login-body-right'>
                    <img src={imageReview} alt=''/>
                </div>
            </div>
        </div>
    );
}
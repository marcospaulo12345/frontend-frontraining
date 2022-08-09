import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Context } from "../../Context/authContext";

import Logo from "../../assets/images/logo.png"
import imageReview from '../../assets/images/imagemReview.svg';
import history from "../../history";

import './styles.css'

const schema = yup.object().shape({
    username: yup.string().required('Esse campo é obrigatório'),
    email: yup.string().email('E-mail inválido').required('Esse campo é obrigatório'),
    password: yup.string()
        .required('Esse campo é obrigatório')
        .min(6, 'A senha deve ter no mínimo 6 caracteres.')
        .matches(/^(?=.*[A-Z]){1}.*$/, 'Pelo menos uma letra maiúscula')
        .matches(/^(?=.*[a-z]){1}.*$/, 'Pelo menos uma letra minúscula')
        .matches(/^(?=.*[0-9]){1}.*$/, 'Pelo menos um dígito')
        .matches(/^(?=.*[#?!@$%^&*-]){1}.*$/, 'Pelo menos um caractere especial'),
}).required();

export default function Register(){

    const { handleRegister } = useContext(Context);

    const {register, handleSubmit, setError, clearErrors, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const registro = async (data) => {
        console.log(data)
        await handleRegister({"email":data.email, "username":data.username, "password":data.password}).catch(response => {
            setError('apiError', {message: response.message});
            //history.go(0);
        });

    }

    return (
        <div id='register'>
            <div id='register-body'>
                <div id='register-body-left'>
                    <header>
                        <img src={Logo} onClick={() => history.push('/')} alt="Logo"></img>
                    </header>
                    
                    <form onSubmit={handleSubmit(registro)}>
                        <div id="title-register">
                            <h1>Cadastrar</h1>
                            <h3>Preencha todos os campos abaixo para entrar.</h3>
                        </div>
                        <div className="reg-inputSpan">
                            <input 
                                placeholder='Nome' 
                                title="username" 
                                name='username' 
                                type='text'
                                {...register("username")}
                            ></input>
                            {errors.username && <span>{errors.username.message}</span>}
                        </div>
                        <div className="reg-inputSpan">
                            <input 
                                placeholder='E-mail' 
                                title="E-mail" 
                                name='email' 
                                type='email'
                                {...register("email")}
                            ></input>
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>
                        <div className="reg-inputSpan">
                            <input 
                                className="input-password"
                                placeholder='Senha' 
                                title="Password"  
                                name='password' 
                                type='password'
                                {...register("password")}
                            ></input>
                            {errors.password && <span>{errors.password.message}</span>}
                        </div>
                        {errors.apiError && <span id="reg-apiError">{errors.apiError.message}</span>}

                        <button type='submit' onClick={() => clearErrors()} >Cadastrar</button>
                        <h3>Já possui uma conta?</h3>
                        <Link to="/login">clique aqui</Link>
                    </form>
                </div>
                <div id='register-body-right'>
                    <img src={imageReview} alt=''/>
                </div>
            </div>
        </div>
    );
}


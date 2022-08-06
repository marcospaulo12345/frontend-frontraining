import React, {useState, useEffect} from "react";
import history from "../../history";
import api from "../../api";

export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    async function handleLogin({email, password}){
        api.post('/user/auth', {
            "email": email,
            "password": password
        }).then(response => {
            console.log(response.data);
            localStorage.setItem('token', JSON.stringify(response.data.token));
            api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

            localStorage.setItem('user', JSON.stringify(response.data.user));
            api.defaults.headers.Authorization = JSON.stringify(response.data.user);

            setUser(response.data.user);
            setAuthenticated(true);
            history.push('/');
        }).catch(err => {
            throw err.response.data;
        });
    }

    async function handleRegister({username, email, password}){
        console.log(username, email, password);
        
        return await api.post('/user', {
            "username": username,
            "email": email,
            "password": password
        }).then(response => {
            console.log(response.data);

            localStorage.setItem('token', JSON.stringify(response.data.token));
            api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

            localStorage.setItem('user', JSON.stringify(response.data.user));
            api.defaults.headers.Authorization = JSON.stringify(response.data.user);

            setUser(response.data.user);
            setAuthenticated(true);

            history.push('/');
        })
    }

    return {authenticated, handleLogin, handleRegister}
}
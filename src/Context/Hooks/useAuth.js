import React, {useState, useEffect} from "react";
import history from "../../history";
import api from "../../api";

export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        if(token && user){
            console.log('teste')
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            api.defaults.headers.User = JSON.stringify(user);
            setUser(JSON.parse(user));
            setAuthenticated(true);
        }

    }, [])

    async function handleLogin({email, password}){
        await api.post('/user/auth', {
            "email": email,
            "password": password
        }).then(response => {
            //console.log(response.data);
            localStorage.setItem('token', JSON.stringify(response.data.token));
            api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

            localStorage.setItem('user', JSON.stringify(response.data.user));
            api.defaults.headers.Authorization = JSON.stringify(response.data.user);

            setUser(response.data.user);
            setAuthenticated(true);
            history.push('/');
        }).catch(err => {
            console.log(err.response.data.message)
            throw err.response.data;
        });
    }

    async function handleRegister({username, email, password}){
        //console.log(username, email, password);
        
        return await api.post('/user', {
            "username": username,
            "email": email,
            "password": password
        }).then(response => {
            //console.log(response.data);

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

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        api.defaults.headers.Authorization = undefined;

        //history.push('/login');
    }

    return {authenticated, handleLogin, handleRegister, user, handleLogout}
}
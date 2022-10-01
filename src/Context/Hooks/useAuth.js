import React, {useState, useEffect} from "react";
import history from "../../history";
import api from "../../api";

export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        if(token && user){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            api.defaults.headers.User = JSON.stringify(user);
            setUser(JSON.parse(user));
            setAuthenticated(true);
        }
        setLoading(false);
    }, [])

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        if(token && user){
            console.log(JSON.parse(user))
            api.get(`user/find?id=${JSON.parse(user).id}`).then(response => {
                setUser(response.data.user);
            })
        }

    }, [])

    async function handleLogin({email, password}){
        await api.post('/user/auth', {
            "email": email,
            "password": password
        }).then(response => {
            console.log(response.data);
            localStorage.setItem('token', JSON.stringify(response.data.token));
            api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

            localStorage.setItem('user', JSON.stringify(response.data.user));
            api.defaults.headers.User = JSON.stringify(response.data.user);
            console.log(api.defaults.headers.Authorization);

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
            console.log(response.data);

            localStorage.setItem('token', JSON.stringify(response.data.token));
            api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

            localStorage.setItem('user', JSON.stringify(response.data.user));
            api.defaults.headers.User = JSON.stringify(response.data.user);

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
        history.push('/');
    }

    return {authenticated, handleLogin, handleRegister, user, handleLogout, loading}
}
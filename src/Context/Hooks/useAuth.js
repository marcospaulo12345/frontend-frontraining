import React, {useState, useEffect} from "react";
import api from "../../api";

export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false);

    async function handleLogin({email, password}){
        api.post('/user/auth', {
            "email": email,
            "password": password
        }).then(response => {
            console.log(response.data)
            setAuthenticated(true)
        })
    }

    return {authenticated, handleLogin}
}
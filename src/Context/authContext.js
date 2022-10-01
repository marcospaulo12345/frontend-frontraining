import React, {createContext} from "react";

import useAuth from "./Hooks/useAuth";

const Context = createContext();


function AuthProvider({children}){
    const {authenticated, handleLogin, handleRegister, user, handleLogout, loading} = useAuth();

    return (
        <Context.Provider value={{authenticated, handleLogin, handleRegister, user, handleLogout, loading}}>
            {children}
        </Context.Provider>
    );
}

export {Context, AuthProvider}
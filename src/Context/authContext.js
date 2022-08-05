import React, {createContext} from "react";

import useAuth from "./Hooks/useAuth";

const Context = createContext();


function AuthProvider({children}){
    const {authenticated, handleLogin} = useAuth();

    return (
        <Context.Provider value={{authenticated, handleLogin}}>
            {children}
        </Context.Provider>
    );
}

export {Context, AuthProvider}
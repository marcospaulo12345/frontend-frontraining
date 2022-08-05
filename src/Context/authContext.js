import React, {createContext} from "react";

const Context = createContext();

function AuthProvider({children}){
    return (
        <Context.Provider value={{authentication: false}}>
            {children}
        </Context.Provider>
    );
}

export {Context, AuthProvider}
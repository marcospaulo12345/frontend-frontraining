import React, { useContext } from "react";
import {Switch, Route, Redirect} from 'react-router-dom';

import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import Register from "./pages/Register/register";
import Challenges from "./pages/Challenges/challenges";
import CreateChallege from "./pages/CreateChallenge/createChallenge";
import DetailsChallenge from "./pages/DetailsChallenge/index";
import Solutions from './pages/Solutions/solutions';
import CreateSolution from "./pages/CreateSolution/createSolution";
import DetailsSolution from "./pages/DetailsSolution";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import { Context } from "./Context/authContext";

function CustomRoute({isPrivate, children, ...rest}) {
    const {user, authenticated, loading} = useContext(Context);

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(isPrivate && !authenticated) {
        return <Redirect to="/login" />
    }

    return <Route {...rest} />
}

export default function Routes() {
    const { authenticated} = useContext(Context)
    return (
        <Switch>
            <CustomRoute exact path={'/'} component={Home} />
            <CustomRoute 
                exact 
                path={'/login'} 
                render={() => 
                    authenticated ? <Redirect to="/" /> : <Login />
                }
            />
            <CustomRoute 
                exact 
                path={'/cadastro'} 
                render={() => 
                    authenticated ? <Redirect to="/" /> : <Register />
                }
            />
            <CustomRoute exact path={'/desafios'} component={Challenges}/>
            <CustomRoute isPrivate exact path={'/criar/desafio'} component={CreateChallege}/>
            <CustomRoute isPrivate exact path={'/desafio/detalhes'} component={DetailsChallenge}/>
            <CustomRoute isPrivate exact path={'/detalhes/solucao'} component={DetailsSolution} />
            <CustomRoute exact path={'/solucoes'} component={Solutions}/>
            <CustomRoute isPrivate exact path={'/criar/solucao'} component={CreateSolution}/>
            <CustomRoute isPrivate exact path={'/perfil'} component={Profile}/>
            <Route path={'*'} component={NotFound} />
        </Switch>
    )
}
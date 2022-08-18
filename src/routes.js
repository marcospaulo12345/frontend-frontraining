import React from "react";
import {Switch, Route} from 'react-router-dom';

import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import Register from "./pages/Register/register";
import Challenges from "./pages/Challenges/challenges";
import CreateChallege from "./pages/CreateChallenge/createChallenge";
import DetailsChallenge from "./pages/DetailsChallenge/index";
import Solutions from './pages/Solutions/solutions';

export default function Routes() {
    return (
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/login'} component={Login}/>
            <Route exact path={'/cadastro'} component={Register}/>
            <Route exact path={'/desafios'} component={Challenges}/>
            <Route exact path={'/criar/desafio'} component={CreateChallege}/>
            <Route exact path={'/desafio/detalhes'} component={DetailsChallenge}/>
            <Route exact path={'/solucoes'} component={Solutions}/>
        </Switch>
    )
}
import React from "react";
import {Switch, Route} from 'react-router-dom';

import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import Register from "./pages/Register/register";
import Challenges from "./pages/Challenges/challenges";
import CreateChallege from "./pages/CreateChallenge/createChallenge";

export default function Routes() {
    return (
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/login'} component={Login}/>
            <Route exact path={'/cadastro'} component={Register}/>
            <Route exact path={'/desafios'} component={Challenges}/>
            <Route exact path={'/criar/desafio'} component={CreateChallege}/>
        </Switch>
    )
}
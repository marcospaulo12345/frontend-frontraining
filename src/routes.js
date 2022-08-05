import React from "react";
import {Switch, Route} from 'react-router-dom';
import Login from "./pages/Login/login";

export default function Routes() {
    return (
        <Switch>
            <Route exact path={'/login'} component={Login}/>
        </Switch>
    )
}
import React from "react";
import {Router} from 'react-router-dom';
import history from "./history";

import Routes from './routes';
import { AuthProvider } from "./Context/authContext";

import './assets/styles/global.css';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;

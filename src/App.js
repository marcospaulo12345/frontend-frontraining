import React from "react";
import {Router} from 'react-router-dom';
import history from "./history";

import Routes from './routes';
import { AuthProvider } from "./Context/authContext";

import './assets/styles/global.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;

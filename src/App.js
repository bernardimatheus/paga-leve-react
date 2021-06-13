import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import { ToastContainer } from 'react-toastify';

import 'bulma/css/bulma.min.css';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <ToastContainer />
    </Router>
  );
}

export default App;
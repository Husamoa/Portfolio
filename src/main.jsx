import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom'
import App from './components/App.jsx';
import './sass/main.scss';



ReactDOM.render((<HashRouter>
  <App/>
</HashRouter>),
document.getElementById('App'));

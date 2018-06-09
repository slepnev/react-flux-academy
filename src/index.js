import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import registerServiceWorker from './registerServiceWorker';
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();

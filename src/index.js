import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HttpsRedirect from 'react-https-redirect';
import * as install from './assets/js/install';

ReactDOM.render(
  <HttpsRedirect>
    <App />
  </HttpsRedirect>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
install.register();
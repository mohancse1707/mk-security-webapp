/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import App from './app';
import { Provider } from 'react-redux';
import initializeStore from './config/store';



const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={initializeStore}>
    <App />
  </Provider>
  , rootEl);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

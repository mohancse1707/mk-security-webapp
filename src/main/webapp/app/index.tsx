
/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './app.css';
import App from './app';
import initialize from './config/store';
import { loadIcons } from './config/icon-loader';
loadIcons();

const store = initialize();
const rootEl = document.getElementById('root');
import axios from 'axios';
import { Redirect } from 'react-router-dom';

axios.interceptors.response.use(response => {
  return response;
}, error => {
  switch (error.response.status) {
    case 401:

      console.log('Bad request');
      break;
    default:
      break;
  }
  return Promise.reject(error);
});
const render = Component =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <Component />
      </div>
    </Provider>,
    rootEl
  );

render(App);

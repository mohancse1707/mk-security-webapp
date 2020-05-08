import React from 'react';
import './app.css';
import { HashRouter as Router } from 'react-router-dom';
import AppRoutes from 'app/routes';

const baseHref = document
  .querySelector('base')
  .getAttribute('href')
  .replace(/\/$/, '');

export class App extends React.Component<any, any> {
  render() {
    return (
      <Router basename={baseHref}>
        <AppRoutes />
      </Router>
    );
  }
}

export default App;

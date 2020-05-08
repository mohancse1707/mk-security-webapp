import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'app/module/login/login';
import Home from 'app/module/home/home';

const Routes = () => (
  <div className="view-routes">
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  </div>
);

export default Routes;

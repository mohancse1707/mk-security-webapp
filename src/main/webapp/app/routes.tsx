import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'app/module/login/login';
import Home from 'app/module/home/home';
import User from 'app/module/user/user';
import PrivateRoute from 'app/shared/auth/private-route';
const Routes = () => (
  <div className="mt-175">
    <Switch>
      <Route path="/" exact component={Login}  />
      <PrivateRoute path="/home"  component={Home} />
      <PrivateRoute path="/user" component={User} />
    </Switch>
  </div>
);

export default Routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'app/module/login/login';
import Home from 'app/module/home/home';
import User from 'app/module/user-management/user';
import PrivateRoute, { Authorized } from 'app/shared/auth/private-route';
import DynamicInlineTable from 'app/module/dynamic-inline-table/dynamic-inline-table';
const Routes = () => (
  <div className="mt-175">
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/dynamic" component={DynamicInlineTable}/>
    </Switch>
  </div>
);

export default Routes;

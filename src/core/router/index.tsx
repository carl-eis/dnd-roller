import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from '~/pages';

export default () => (
  <Switch>
    <Route component={HomePage} exact path="/" />
  </Switch>
);

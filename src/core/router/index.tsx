import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from '~/pages';

export default () => (
  <Router
    basename={'/dnd-roller'}
  >
    <Switch>
      <Route component={HomePage} exact path="/" />
    </Switch>
  </Router>
);

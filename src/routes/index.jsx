
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CustomerDetails from '../pages/CustomerDetails';
import Customers from '../pages/Customers';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/customer-details" component={CustomerDetails} />
      <Route path="/customers" component={Customers} />
    </Switch>
  );
}
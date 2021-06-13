import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Customers from '../pages/Customers';
import AddCustomer from '../pages/Customers/components/AddCustomer';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/customers" component={Customers} />
      <Route path="/add-customer" component={AddCustomer} />
    </Switch>
  );
}

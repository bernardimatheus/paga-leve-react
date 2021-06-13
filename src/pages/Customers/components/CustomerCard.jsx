import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Columns, Button, Container, Heading } from 'react-bulma-components';
import Customer from './Customer';

function CustomerCard({ customers, setCustomers }) {
  const history = useHistory();

  const handleSetCustomers = (customerId) => {
    return setCustomers(customers.filter((customer) => customer.customerId !== customerId));
  };

  return (
    <Container m={2}>
      <Container ml="1.3rem" mb={5}>
        <Button onClick={() => history.push('/add-customer')} color="primary">
          Adicionar cliente
        </Button>
      </Container>

      <Columns
        is-mobile="true"
        is-widescreen="true"
        className={'is-one-quarter'}
        // style={{ boxSizing: 'unset', flexGrow: 1 }}
      >
        {customers &&
          customers.map((customer) => (
            <Customer
              key={customer.customerId}
              customer={customer}
              handleSetCustomers={handleSetCustomers}
            />
          ))}
      </Columns>
      {customers.length === 0 && (
        <Heading style={{ color: 'white' }}>Nenhum cliente cadastrado</Heading>
      )}
    </Container>
  );
}

export default CustomerCard;

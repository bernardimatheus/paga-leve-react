import React, { useState, useEffect } from 'react';
import { Heading, Container, Icon, Columns } from 'react-bulma-components';
import { FaAngleLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import CustomerCard from './components/CustomerCard';

function Customers() {
  const history = useHistory();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    api.get(`/customers`).then((res) => {
      console.log(res.data);
      setCustomers(res.data);
    });
  }, []);

  return (
    <Container style={{ maxWidth: '1200px' }}>
      <Container display="flex" justifyContent="flex-start" py={6}>
        <Icon onClick={() => history.goBack()} style={{ cursor: 'pointer' }}>
          <FaAngleLeft color="white" />
        </Icon>
        <Heading subtitle style={{ color: 'white' }}>
          Clientes
        </Heading>
      </Container>

      <Columns is-mobile="true" is-widescreen="true">
        {customers &&
          customers.map((customer) => (
            <CustomerCard key={customer.customerId} customer={customer} />
          ))}
      </Columns>
    </Container>
  );
}

export default Customers;

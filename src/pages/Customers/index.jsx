import React, { useState, useEffect } from 'react';
import { Heading, Container, Icon, Columns } from 'react-bulma-components';
import { FaAngleLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import CustomerCard from './components/CustomerCard';
import ReactLoading from 'react-loading';

function Customers() {
  const history = useHistory();
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    api.get(`/customers`).then((res) => {
      setLoading(false);
      setCustomers(res.data);
    });
  }, []);

  return (
    <Container style={{ maxWidth: '1200px' }}>
      <Container display="flex" justifyContent="flex-start" py={6}>
        <Icon onClick={() => history.push('/')} style={{ cursor: 'pointer' }}>
          <FaAngleLeft color="white" />
        </Icon>
        <Heading subtitle style={{ color: 'white' }}>
          Clientes
        </Heading>
      </Container>
      {loading ? (
        <ReactLoading type="spin" color="#00d1b2" height={500} width={275} />
      ) : (
        <CustomerCard customers={customers} setCustomers={setCustomers} />
      )}
    </Container>
  );
}

export default Customers;

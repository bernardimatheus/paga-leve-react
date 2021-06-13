import React, { useState, useEffect } from 'react';
import {
  Card,
  Content,
  Media,
  Heading,
  Container,
  Image,
  Box,
  Icon,
  Columns,
} from 'react-bulma-components';
import Profile from '../../images/profile.png';
import { FaAngleLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

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
    <>
      <Container display="flex">
        <Icon onClick={() => history.goBack()} style={{ cursor: 'pointer' }}>
          <FaAngleLeft color="white" />
        </Icon>
        <Heading subtitle style={{ color: 'white' }}>
          Clientes
        </Heading>
      </Container>

      <Columns is-mobile is-widescreen>
        {customers.map((customer) => (
          <Columns.Column size={2} ml="6" mt="4" is-narrow>
            <Card
              key={customer.customerId}
              style={{ width: 250, margin: 'auto', height: 200 }}
              size="20"
            >
              <Card.Content>
                <Media>
                  <Media.Item renderAs="figure" align="left">
                    <Image size={64} alt="64x64" src={Profile} />
                  </Media.Item>
                  <Media.Item>
                    <Heading size={4}>{customer.firstName}</Heading>
                    <Heading subtitle size={6}>
                      {customer.lastName}
                    </Heading>
                  </Media.Item>
                </Media>
                <Content>{customer.observations}</Content>
              </Card.Content>
            </Card>
          </Columns.Column>
        ))}
      </Columns>
    </>
  );
}

export default Customers;

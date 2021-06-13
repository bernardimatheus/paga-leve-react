import React from 'react';
import { Card, Content, Media, Heading, Container, Image, Box, Icon } from 'react-bulma-components';
import Profile from '../../images/profile.png';
import { FaAngleLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

// import { Container } from './styles';

function Customers() {
  const history = useHistory();

  const customers = [
    {
      customerId: 1,
      firstName: 'Matheus',
      lastName: 'Bernardi',
      observations: 'Test',
    },
    {
      customerId: 2,
      firstName: 'Matheus',
      lastName: 'Bernardi',
      observations: 'Test',
    },
    {
      customerId: 3,
      firstName: 'Matheus',
      lastName: 'Bernardi',
      observations: 'Test',
    },
    {
      customerId: 3,
      firstName: 'Matheus',
      lastName: 'Bernardi',
      observations: 'Test',
    },
    {
      customerId: 3,
      firstName: 'Matheus',
      lastName: 'Bernardi',
      observations: 'Test',
    },
    {
      customerId: 3,
      firstName: 'Matheus',
      lastName: 'Bernardi',
      observations: 'Test',
    },
    {
      customerId: 3,
      firstName: 'Matheus',
      lastName: 'Bernardi',
      observations: 'Test',
    },
    {
      customerId: 3,
      firstName: 'Matheus',
      lastName: 'Bernardi',
      observations: 'Test',
    },
    {
      customerId: 3,
      firstName: 'Matheus',
      lastName: 'Bernardi',
      observations: 'Test',
    },
  ];

  return (
    <>
      <Container flexDirection="row">
        <Icon onClick={() => history.goBack()} style={{ cursor: 'pointer' }}>
          <FaAngleLeft color="white" />
        </Icon>
        <Heading subtitle style={{ color: 'white' }}>
          Clientes
        </Heading>
      </Container>
      <Container flexDirection="row" flexWrap="wrap">
        {customers.map((customer) => (
          <Card
            key={customer.customerId}
            style={{ width: 250, margin: 'auto', height: 200 }}
            size="20"
            ml="6"
            mt="4"
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
        ))}
      </Container>
    </>
  );
}

export default Customers;

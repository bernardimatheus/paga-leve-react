import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  Columns,
  Content,
  Heading,
  Image,
  Media,
  Icon,
  Button,
  Container,
} from 'react-bulma-components';
import Profile from '../../../images/profile.png';
import { FaTrash, FaEdit } from 'react-icons/fa';
import api from '../../../services/api';

function CustomerCard({ customers, setCustomers }) {
  const history = useHistory();

  const handleDeleteCustomer = (customerId) => {
    api.delete(`/customers/${customerId}`).then((res) => {
      return setCustomers(customers.filter((customer) => customer.customerId !== customerId));
    });
  };

  return (
    <Container>
      <Container ml="1.3rem" mb={5}>
        <Button onClick={() => history.push('/add-customer')} color="primary">
          Adicionar cliente
        </Button>
      </Container>

      <Columns is-mobile="true" is-widescreen="true" style={{ boxSizing: 'unset' }}>
        {customers &&
          customers.map((customer) => (
            <Columns.Column key={customer.customerId} size={3} pl={0}>
              <Card style={{ margin: 'auto' }} size="">
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
                  <Content size={30}>
                    <Content size={20}>{customer.observations}</Content>
                  </Content>
                </Card.Content>
                <Card.Footer display="flex" justifyContent="flex-end">
                  <Content>
                    <Icon
                      onClick={() =>
                        history.push({
                          pathname: '/add-customer',
                          state: { customerProps: customer, action: 'edit' },
                        })
                      }
                      style={{ cursor: 'pointer' }}
                    >
                      <FaEdit color="#00d1b2" />
                    </Icon>
                  </Content>
                  <Content>
                    <Icon
                      onClick={() => handleDeleteCustomer(customer.customerId)}
                      style={{ cursor: 'pointer' }}
                    >
                      <FaTrash color="red" />
                    </Icon>
                  </Content>
                </Card.Footer>
              </Card>
            </Columns.Column>
          ))}
      </Columns>
    </Container>
  );
}

export default CustomerCard;

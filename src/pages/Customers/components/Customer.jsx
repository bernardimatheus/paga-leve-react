import React, { useState } from 'react';
import {
  Card,
  Columns,
  Content,
  Heading,
  Image,
  Media,
  Icon,
  Button,
} from 'react-bulma-components';
import Profile from '../../../images/profile.png';
import { FaTrash, FaEdit } from 'react-icons/fa';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';

// import { Container } from './styles';

function Customer({ customer, handleSetCustomers }) {
  const history = useHistory();

  const [loading, isLoading] = useState(false);

  const handleDeleteCustomer = (customerId) => {
    isLoading({});
    api.delete(`/customers/${customerId}`).then((res) => {
      isLoading(false);
      return handleSetCustomers(customerId);
    });
  };

  return (
    <Columns.Column size={3} pl={0}>
      <Card style={{ margin: 'auto', height: '100%' }}>
        <Card.Header justifyContent="flex-end">
          <Button m={1} size="normal" outlined="true" style={{ borderColor: 'white' }}>
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
          </Button>

          <Button
            id={customer.customerId}
            loading={loading}
            disabled={loading}
            m={1}
            size="normal"
            outlined="true"
            style={{ borderColor: 'white' }}
          >
            <Icon
              onClick={() => handleDeleteCustomer(customer.customerId)}
              style={{ cursor: 'pointer' }}
            >
              <FaTrash color="red" />
            </Icon>
          </Button>
        </Card.Header>
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
      </Card>
    </Columns.Column>
  );
}

export default Customer;

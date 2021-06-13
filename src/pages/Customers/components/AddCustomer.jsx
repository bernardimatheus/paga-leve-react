import React, { useState } from 'react';
import { Form, Icon, Button, Container } from 'react-bulma-components';
import { FaWpforms } from 'react-icons/fa';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';

// import { Container } from './styles';

function AddComponent(props) {
  const history = useHistory();

  const { customerProps, action } = (props.location && props.location.state) || {};

  const [saveAction, setSaveAction] = useState(action || '');
  const [customerId, setCustomerId] = useState(customerProps?.customerId || '');
  const [firstName, setFirstName] = useState(customerProps?.firstName || '');
  const [lastName, setLastName] = useState(customerProps?.lastName || '');
  const [observations, setObservations] = useState(customerProps?.observations || '');

  const handleSaveCustomer = (e) => {
    e.preventDefault();

    const customerParams = {
      firstName,
      lastName,
      observations,
    };

    if (saveAction === 'edit') {
      api.put(`/customers/${customerId}`, customerParams).then((res) => {
        history.push('/customers');
      });
    } else {
      api.post(`/customers`, customerParams).then((res) => {
        history.push('/customers');
      });
    }
  };

  return (
    <Container p={6} style={{ maxWidth: '1200px' }} backgroundColor="white">
      <form onSubmit={handleSaveCustomer}>
        <Form.Field>
          <Form.Label>Nome</Form.Label>
          <Form.Control>
            <Form.Input
              color="primary"
              value={firstName}
              onChange={(e) => {
                return setFirstName(e.target.value);
              }}
            />
            <Icon align="left" size="small">
              <FaWpforms />
            </Icon>
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control>
            <Form.Input
              color="primary"
              value={lastName}
              onChange={(e) => {
                return setLastName(e.target.value);
              }}
            />
            <Icon align="left" size="small">
              <FaWpforms />
            </Icon>
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Observações</Form.Label>
          <Form.Control>
            <Form.Input
              color="primary"
              value={observations}
              onChange={(e) => {
                return setObservations(e.target.value);
              }}
            />
            <Icon align="left" size="small">
              <FaWpforms />
            </Icon>
          </Form.Control>
        </Form.Field>

        <Form.Field kind="group">
          <Form.Control>
            <Button submit color="primary">
              Salvar
            </Button>
          </Form.Control>
          <Form.Control>
            <Button color="link" colorVariant="light" onClick={() => history.push('/customers')}>
              Cancel
            </Button>
          </Form.Control>
        </Form.Field>
      </form>
    </Container>
  );
}

export default AddComponent;

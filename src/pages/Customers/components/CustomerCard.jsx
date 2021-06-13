import React from 'react';
import { Card, Columns, Content, Heading, Image, Media } from 'react-bulma-components';
import Profile from '../../../images/profile.png';

function CustomerCard({ customers }) {
  return (
    <Columns is-mobile="true" is-widescreen="true">
      {customers &&
        customers.map((customer) => (
          <Columns.Column key={customer.customerId} size={3} is-narrow="true">
            <Card style={{ width: 250, margin: 'auto', height: 200 }} size="20">
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
  );
}

export default CustomerCard;

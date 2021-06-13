import React from 'react';
import { Container, Media, Image, Button, Heading } from 'react-bulma-components';
import Lottie from 'react-lottie';
import * as MoneyTransaction from '../../images/money-transaction.json';
import pagaLeve from '../../images/pagaleve-logo.png';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: MoneyTransaction.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container display="flex" flexDirection="column" alignItems="center">
      <Media mt={3}>
        <Media.Item alignItems="center">
          <Image src={pagaLeve} size={128} />
        </Media.Item>
      </Media>
      <Heading alignItems="center" textColor="primary">
        Paga Leve - Test
      </Heading>

      <Container display="flex" flexDirection="column" alignItems="center">
        <Lottie options={defaultOptions} height={300} width={300} />
        <Button mt="1" color="primary" size="large" onClick={() => history.push('/customers')}>
          Consultar clientes
        </Button>
      </Container>
    </Container>
  );
}

export default Home;

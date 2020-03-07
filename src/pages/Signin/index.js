import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import { Background, Container, Form, FormInput, SubmitButton } from './styles';

export default function Signin() {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            placeholder="Digite o seu id de entregador"
            keyboardType="number-pad"
            autoCorrect={false}
          />

          <SubmitButton>Teste</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

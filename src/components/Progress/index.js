import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { Container, ProgressContainer, StatusDot } from './styles';

export default function Progress({ data }) {
  const [status, setStatus] = useState('AGUARDANDO');

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Container>
      <ProgressContainer>
        <StatusDot active />
        <StatusDot active={status === 'ENTREGUE' || status === 'RETIRADA'} />
        <StatusDot active={status === 'ENTREGUE'} />
      </ProgressContainer>
    </Container>
  );
}

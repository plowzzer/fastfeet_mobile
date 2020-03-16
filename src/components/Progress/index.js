import React from 'react';

import {
  Container,
  ProgressContainer,
  StatusDot,
  ProgressName,
  StatusName,
} from './styles';

export default function Progress({ status }) {
  return (
    <Container>
      <ProgressContainer>
        <StatusDot active />
        <StatusDot active={status === 'DELIVERED' || status === 'WITHDRAWN'} />
        <StatusDot active={status === 'DELIVERED'} />
      </ProgressContainer>
      <ProgressName>
        <StatusName>Aguardando Retirada</StatusName>
        <StatusName>Retirada</StatusName>
        <StatusName>Entregue</StatusName>
      </ProgressName>
    </Container>
  );
}

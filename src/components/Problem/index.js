import React from 'react';

import { Container, Description, Date } from './styles';

export default function Problem({ data }) {
  return (
    <Container>
      <Description>{data.description}</Description>
      <Date>{data.createdAt}</Date>
    </Container>
  );
}

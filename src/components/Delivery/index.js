import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';

import Progress from '~/components/Progress';

import {
  Container,
  TitleContainer,
  Title,
  DetailsContainer,
  Detail,
  Subtitle,
  DetailData,
  LinkStyled,
} from './styles';

export default function Delivery({ data }) {
  return (
    <Container>
      <TitleContainer>
        <Icon name="local-shipping" color="#7D40E7" size={22} />
        <Title>Encomenda {data.id}</Title>
      </TitleContainer>
      <Progress status={data.status} />
      <DetailsContainer>
        <Detail>
          <Subtitle>Data</Subtitle>
          <DetailData>
            {data.start_date
              ? format(new Date(data.start_date), 'dd/MM/yyyy')
              : '-'}
          </DetailData>
        </Detail>
        <Detail>
          <Subtitle>Cidade</Subtitle>
          <DetailData>{data.recipient.city}</DetailData>
        </Detail>
        <Detail>
          <LinkStyled>Ver detalhes</LinkStyled>
        </Detail>
      </DetailsContainer>
    </Container>
  );
}

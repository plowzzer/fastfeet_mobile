import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        <Icon name="local-shopping" color="#7D40E7" size={22} />
        <Title>Encomenda {data.id}</Title>
      </TitleContainer>
      <Progress status={data} />
      <DetailsContainer>
        <Detail>
          <Subtitle>Data</Subtitle>
          <DetailData>{data.start_date ? data.start_date : '-'}</DetailData>
        </Detail>
        <Detail>
          <Subtitle>Cidade</Subtitle>
          <DetailData>
            {data.recipient.city} - {data.recipient.state}
          </DetailData>
        </Detail>
        <Detail>
          <LinkStyled>Ver detalhes</LinkStyled>
        </Detail>
      </DetailsContainer>
    </Container>
  );
}

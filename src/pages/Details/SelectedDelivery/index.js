import React from 'react';
import { format } from 'date-fns';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Background,
  CardContainer,
  Header,
  HeaderText,
  DetailContainer,
  DetailLabel,
  DetailText,
  RowDetail,
  OptionsContainer,
  Option,
  OptionText,
} from './styles';

export default function SelectedDelivery({ navigation }) {
  const data = navigation.getParam('data');

  return (
    <Container>
      <Background />
      <CardContainer>
        <Header>
          <Icon name="local-shipping" color="#7D40E7" size={15} />
          <HeaderText>Informações da entrega</HeaderText>
        </Header>
        <DetailContainer>
          <DetailLabel>Destinatário</DetailLabel>
          <DetailText>{data.recipient.name}</DetailText>
        </DetailContainer>
        <DetailContainer>
          <DetailLabel>Endereço de entrega</DetailLabel>
          <DetailText>
            {data.recipient.street}, {data.recipient.number}
            {data.recipient.complement && ` - ${data.recipient.complement} `} |
            {data.recipient.city} - {data.recipient.state}, {data.recipient.cep}
          </DetailText>
        </DetailContainer>
        <DetailContainer>
          <DetailLabel>Produto</DetailLabel>
          <DetailText>{data.product}</DetailText>
        </DetailContainer>
      </CardContainer>

      <CardContainer>
        <Header>
          <Icon name="event" color="#7D40E7" size={15} />
          <HeaderText>Situação da entrega</HeaderText>
        </Header>
        <DetailContainer>
          <DetailLabel>Status</DetailLabel>
          <DetailText>{data.status}</DetailText>
        </DetailContainer>
        <RowDetail>
          <DetailContainer>
            <DetailLabel>Data de retirada</DetailLabel>
            <DetailText>
              {data.start_date
                ? format(new Date(data.start_date), 'dd/MM/yyyy')
                : '--/--/--'}
            </DetailText>
          </DetailContainer>
          <DetailContainer>
            <DetailLabel>Data de entrega</DetailLabel>
            <DetailText>
              {data.end_date
                ? format(new Date(data.end_date), 'dd/MM/yyyy')
                : '--/--/--'}
            </DetailText>
          </DetailContainer>
        </RowDetail>
      </CardContainer>
      <OptionsContainer>
        <Option
          onPress={() => {
            navigation.navigate('InformProblem', { data });
          }}
        >
          <Icon name="highlight-off" size={24} color="#E74040" />
          <OptionText>Informar Problema</OptionText>
        </Option>
        <Option>
          <Icon name="info-outline" size={24} color="#E7BA40" />
          <OptionText>Visualizar Problemas</OptionText>
        </Option>
        <Option>
          <Icon name="alarm-on" size={24} color="#7D40E7" />
          <OptionText>Confirmar Entrega</OptionText>
        </Option>
      </OptionsContainer>
    </Container>
  );
}

SelectedDelivery.navigationOptions = ({ navigation }) => ({
  title: 'Detalhes da encomenda',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});

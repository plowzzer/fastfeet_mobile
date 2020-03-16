import React from 'react';
import { format } from 'date-fns';
import { TouchableOpacity, Alert } from 'react-native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {
  Container,
  Background,
  EffectContainer,
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
  const profile = useSelector(state => state.user.profile);

  async function handleWithdrawn() {
    const packageId = data.id;
    const profileId = profile.id;

    try {
      await api.post(`deliveryman/${profileId}/deliveries/${packageId}`);
    } catch (error) {
      Alert.alert('Alguma coisa aconteceu', `${error.response.data.error}`, [
        { text: 'Ok' },
      ]);
    }
  }

  function renderOptions(status) {
    switch (status) {
      case 'AWAITING':
        return (
          <OptionsContainer>
            <Option onPress={handleWithdrawn}>
              <Icon name="local-shipping" size={24} color="#82BF18" />
              <OptionText>Retirar encomenda</OptionText>
            </Option>
          </OptionsContainer>
        );

      case 'WITHDRAWN':
        return (
          <OptionsContainer>
            <Option
              onPress={() => {
                navigation.navigate('InformProblem', { data });
              }}
            >
              <Icon name="highlight-off" size={24} color="#E74040" />
              <OptionText>Informar Problema</OptionText>
            </Option>
            <Option
              onPress={() => {
                navigation.navigate('CheckProblems', { data });
              }}
            >
              <Icon name="info-outline" size={24} color="#E7BA40" />
              <OptionText>Visualizar Problemas</OptionText>
            </Option>
            <Option
              onPress={() => {
                navigation.navigate('ConfirmDelivery', { data });
              }}
            >
              <Icon name="alarm-on" size={24} color="#7D40E7" />
              <OptionText>Confirmar Entrega</OptionText>
            </Option>
          </OptionsContainer>
        );

      default:
      // Do nothing
    }
  }

  return (
    <Container>
      <Background />
      <EffectContainer>
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
              {data.recipient.complement &&
                ` - ${data.recipient.complement} `}{' '}
              | {data.recipient.city} - {data.recipient.state},{' '}
              {data.recipient.cep}
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
        {renderOptions(data.status)}
      </EffectContainer>
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

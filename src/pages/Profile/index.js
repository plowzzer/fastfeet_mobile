import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Text } from 'react-native';

// import { Container } from './styles';

export default function Profile() {
  return <Text>TESTE2</Text>;
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-circle" color={tintColor} size={24} />
  ),
};

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function InformProblem() {
  // const data = navigation.getParam('data');
  return <Text>TESTE</Text>;
}

InformProblem.navigationOptions = ({ navigation }) => ({
  title: 'Informar Problema',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});

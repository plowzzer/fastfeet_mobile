import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ActivityIndicator, TouchableOpacity } from 'react-native';

import api from '~/services/api';
import Problem from '~/components/Problem';

import {
  Container,
  Background,
  EffectContainer,
  Title,
  NoProblems,
  Problems,
  LoadingContainer,
} from './styles';

export default function CheckProblems({ navigation }) {
  const [title, setTitle] = useState('');
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id, product } = navigation.getParam('data');

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`delivery/${id}/problems`);
      if (response.data.length > 0) {
        // setTitle(response.data[0].package.product);
        setProblems(response.data);
      }
      setLoading(false);
    }

    loadProblems();
  }, []);

  return (
    <Container>
      <Background />
      <EffectContainer>
        <Title>{product}</Title>
        {problems.length > 0 ? (
          <Problems
            data={problems}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Problem data={item} />}
          />
        ) : (
          <NoProblems>Nenhum problema</NoProblems>
        )}

        {loading && (
          <LoadingContainer>
            <ActivityIndicator size="small" color="#7D40E7" />
          </LoadingContainer>
        )}
      </EffectContainer>
    </Container>
  );
}

CheckProblems.navigationOptions = ({ navigation }) => ({
  title: 'Visualizar problemas',
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

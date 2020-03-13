import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {
  Container,
  Background,
  Form,
  FormInput,
  ErrorFeedback,
  SubmitButton,
} from './styles';

export default function InformProblem({ navigation }) {
  const [problem, setProblem] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { id } = navigation.getParam('data');

  async function handleSubmit() {
    if (problem.length > 0) {
      try {
        setLoading(true);
        await api.post(`delivery/${id}/problems`, {
          description: problem,
        });
        setLoading(false);

        navigation.goBack();
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    }
  }

  return (
    <Container>
      <Background />
      <Form>
        <FormInput
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          autoCorrect={false}
          multiline
          value={problem}
          onChangeText={setProblem}
        />

        <ErrorFeedback>{error}</ErrorFeedback>
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Enviar
        </SubmitButton>
      </Form>
    </Container>
  );
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

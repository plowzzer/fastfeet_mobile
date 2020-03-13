import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
`;

export const Background = styled.View`
  background-color: #7d40e7;
  height: 160px;
`;

export const EffectContainer = styled.View`
  margin-top: -55px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  margin: 0px 30px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  height: 300px;
`;

export const ErrorFeedback = styled.Text`
  color: #e74040;
  margin-bottom: 5px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  background-color: #7d40e7;
`;

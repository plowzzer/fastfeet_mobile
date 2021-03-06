import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Background = styled.View`
  background-color: #7d40e7;
  height: 160px;
`;

export const EffectContainer = styled.View`
  margin-top: -55px;
  margin-bottom: 30px;
  flex: 1;
`;

export const SendButton = styled(Button)`
  margin: 0 35px;
  background: #7d40e7;
`;

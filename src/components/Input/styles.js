import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px 15px;
  height: 45px;
  background: #ffffff;
  flex-direction: row;
  align-items: ${props => (props.multiline ? 'flex-start' : 'center')};
  border-radius: 4px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0,0.6)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #444444;
`;

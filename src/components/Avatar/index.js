import styled from 'styled-components/native';

export default styled.Image`
  width: ${props => (props.size ? props.size : '68')}px;
  height: ${props => (props.size ? props.size : '68')}px;
  border-radius: ${props => (props.size ? props.size / 2 : '68')}px;
`;

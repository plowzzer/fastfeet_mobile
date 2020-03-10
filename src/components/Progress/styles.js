import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 30px;
  flex-direction: row;
`;

export const ProgressContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const StatusDot = styled.View`
  width: 9px;
  height: 9px;
  background-color: ${props => (props.active === true ? '#7D40E7' : '#fff')};
  border: 1px solid #7d40e7;
  border-radius: 5px;
`;

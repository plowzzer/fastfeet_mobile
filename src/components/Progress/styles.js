import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 30px;
  flex-direction: column;
`;

export const ProgressContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  background-color: #7d40e7;
  height: 2px;
  margin: 0 20px;
`;

export const StatusDot = styled.View`
  margin-top: -3.5px;
  width: 9px;
  height: 9px;
  background-color: ${props => (props.active === true ? '#7D40E7' : '#fff')};
  border: 1px solid #7d40e7;
  border-radius: 5px;
`;

export const ProgressName = styled.View`
  flex-direction: row;
  margin-top: 5px;
  justify-content: space-between;
`;

export const StatusName = styled.Text`
  width: 50px;
  text-align: center;
  color: #999999;
  font-size: 8px;
`;

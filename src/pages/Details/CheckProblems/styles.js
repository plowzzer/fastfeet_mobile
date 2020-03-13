import styled from 'styled-components';

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
`;

export const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin: 0 30px;
  text-align: center;
`;

export const NoProblems = styled.Text`
  margin: 15px 30px 0;
  padding: 15px;
  margin-bottom: 15px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 3px #0000001a;
  text-align: center;
  color: #999;
`;

export const Problems = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const LoadingContainer = styled.View`
  margin: 30px;
`;

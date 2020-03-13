import styled from 'styled-components/native';

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

export const CardContainer = styled.View`
  background-color: #fff;
  border-radius: 4px;
  padding: 15px;
  margin: 0px 30px 15px;
  box-shadow: 0 0 3px #0000001a;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const HeaderText = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  margin-left: 10px;
`;

export const DetailContainer = styled.View`
  margin-bottom: 15px;
  /* width: 100%; */
`;

export const DetailLabel = styled.Text`
  color: #999999;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const DetailText = styled.Text`
  color: #666666;
  font-size: 14px;
`;

export const RowDetail = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const OptionsContainer = styled.View`
  margin: 0px 30px;
  background-color: #f8f9fd;
  border-radius: 4px;
  box-shadow: 0 0 3px #0000001a;
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border: 1px solid #0000001a;
`;

export const OptionText = styled.Text`
  margin-top: 2px;
  color: #999999;
  font-size: 12px;
  max-width: 70%;
  text-align: center;
`;

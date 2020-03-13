import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  border-radius: 4px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const Title = styled.Text`
  color: #7d40e7;
  font-size: 14px;
  font-weight: bold;
  margin-left: 15px;
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  padding: 20px 10px;
  background-color: #f8f9fd;
  align-items: center;
`;

export const Detail = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 0 5px;
`;

export const Subtitle = styled.Text`
  color: #999999;
  font-size: 8px;
  font-weight: bold;
`;

export const DetailData = styled.Text`
  color: #444444;
  font-size: 12px;
  font-weight: bold;
`;

export const DeliveryLink = styled.TouchableOpacity``;

export const DeliveryLinkText = styled.Text`
  color: #7d40e7;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;

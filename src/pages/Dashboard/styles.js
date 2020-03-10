import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  padding: 0 30px;
`;

export const Profile = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: flex-start;
`;

export const AvatarProfile = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NameProfile = styled.View`
  flex: 2;
  justify-content: center;
  align-items: flex-start;
`;

export const Wellcome = styled.Text`
  color: #666666;
  font-size: 12px;
`;

export const Name = styled.Text`
  color: #444444;
  font-size: 22px;
  font-weight: bold;
`;

export const IconProfile = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.View`
  margin-top: 20px;
  padding: 0 30px;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: #444444;
  font-size: 22px;
  font-weight: bold;
`;

export const Select = styled.View`
  flex-direction: row;
`;

export const Option = styled.Text`
  margin-left: 15px;
  color: ${props => (props.selected ? '#7D40E7' : '#999')};
  text-decoration: ${props => (props.selected ? 'underline' : 'none')};
`;

export const Deliveries = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

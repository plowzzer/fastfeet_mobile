import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  padding: 0 30px;
`;

export const AvatarProfile = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const ProfileDetail = styled.View`
  margin-bottom: 15px;
  padding: 0 35px;
`;

export const DetailName = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const DetailInfo = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;
`;

export const LogoutButton = styled(Button)`
  margin: 0 35px;
  background: #e74040;
`;

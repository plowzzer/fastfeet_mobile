import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import Avatar from '~/components/Avatar';

import {
  Container,
  AvatarProfile,
  ProfileDetail,
  DetailName,
  DetailInfo,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <AvatarProfile>
        {profile.avatar ? (
          <Avatar size={140} source={{ uri: profile.avatar.url }} />
        ) : (
          <Text>{profile.name}</Text>
        )}
      </AvatarProfile>
      <ProfileDetail>
        <DetailName>Nome Completo</DetailName>
        <DetailInfo>{profile.name}</DetailInfo>
      </ProfileDetail>
      <ProfileDetail>
        <DetailName>Email</DetailName>
        <DetailInfo>{profile.email}</DetailInfo>
      </ProfileDetail>
      <ProfileDetail>
        <DetailName>Data de cadastro</DetailName>
        <DetailInfo>
          {profile.createdAt
            ? format(new Date(profile.createdAt), 'dd/MM/yyyy')
            : '-'}
        </DetailInfo>
      </ProfileDetail>
      <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-circle" color={tintColor} size={24} />
  ),
};

import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import api from '~/services/api';
import Avatar from '~/components/Avatar';
import Delivery from '~/components/Delivery';

import {
  Container,
  Profile,
  AvatarProfile,
  NameProfile,
  Wellcome,
  Name,
  IconProfile,
  Menu,
  Title,
  Select,
  Option,
  Deliveries,
} from './styles';

export default function Dashboard({ navigation }) {
  const [deliveries, setDeliveries] = useState([]);
  const [type, setType] = useState('PENDENTES');

  const dispatch = useDispatch();
  const profile = useSelector(state => state?.user?.profile);
  const auth = useSelector(state => state.auth);

  function handleLogout() {
    dispatch(signOut());
  }

  function handleSelect(typeToChange) {
    setType(typeToChange);
  }

  useEffect(() => {
    async function loadDeliveries() {
      const response =
        type === 'PENDENTES'
          ? await api.get(`/deliveryman/${auth.id}/deliveries`, {
              params: {
                status: 'PENDING',
              },
            })
          : await api.get(`/deliveryman/${auth.id}/deliveries`, {
              params: {
                status: 'DONE',
              },
            });

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, [type]);

  return (
    <Container>
      <Profile>
        <AvatarProfile>
          {profile.avatar ? (
            <Avatar source={{ url: profile.avatar.url }} />
          ) : (
            <Text>{profile?.name}</Text>
          )}
        </AvatarProfile>
        <NameProfile>
          <Wellcome>Bem vindo de volta,</Wellcome>
          <Name>{profile.name}</Name>
        </NameProfile>
        <IconProfile>
          <Icon
            onPress={handleLogout}
            name="exit-to-app"
            color="#E74040"
            size={25}
          />
        </IconProfile>
      </Profile>

      <Menu>
        <Title>Entregas</Title>
        <Select>
          <Option
            selected={type === 'PENDENTES'}
            onPress={() => handleSelect('PENDENTES')}
          >
            Pendentes
          </Option>
          <Option
            selected={type === 'ENTREGUES'}
            onPress={() => handleSelect('ENTREGUES')}
          >
            Entregues
          </Option>
        </Select>
      </Menu>

      <Deliveries
        data={deliveries}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Delivery data={item} navigation={navigation} />
        )}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="reorder" color={tintColor} size={24} />
  ),
};

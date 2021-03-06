import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* singIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `deliverymen/${id}`);

    // api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(
      signInSuccess(id, {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        avatar: response.data.avatar,
        createdAt: response.data.createdAt,
      })
    );

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', singIn)]);

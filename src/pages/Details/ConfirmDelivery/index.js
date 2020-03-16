import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

import api from '~/services/api';

import { Container, Background, EffectContainer, SendButton } from './styles';

export default function ConfirmDelivery({ initialProps }) {
  const [{ cameraRef, type, textRecognized }, { takePicture }] = useCamera(
    initialProps
  );
  const dataFile = new FormData();

  async function handleSend() {
    const photo = await takePicture({ quality: 0.5 });
    // console.log(photo);
    dataFile.append('file', photo);
    const response = await api.post('files', dataFile);
    // console.log(dataFile);
    console.log(response);

    // console.log(response);
  }

  return (
    <Container>
      <Background />
      <EffectContainer>
        <RNCamera
          ref={cameraRef}
          type={type}
          onTextRecognized={textRecognized}
          style={styles.preview}
        />
        <SendButton onPress={handleSend}>Enviar</SendButton>
      </EffectContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 30,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

ConfirmDelivery.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar entrega',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});

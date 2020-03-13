import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

import { Container, Background, EffectContainer } from './styles';

export default function ConfirmDelivery({ initialProps }) {
  const [
    { cameraRef, type, isRecording },
    { recordVideo, setIsRecording },
  ] = useCamera(initialProps);

  return (
    <Container>
      <Background />
      <EffectContainer>
        <RNCamera ref={cameraRef} type={type} style={styles.preview} />
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

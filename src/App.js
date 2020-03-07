import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to react native</Text>
    </View>
  );
}

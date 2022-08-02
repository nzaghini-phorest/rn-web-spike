import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

function DetailScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Welcome to React Native for Web</Text>
      </View>
      <Text>DETAILS PAGE!</Text>
    </View>
  );
}
let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: ScreenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5',
    marginVertical: '1',
    textAlign: 'center',
  },
  text: {
    marginVertical: '1',
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
  },
  link: {
    color: '#1B95E0',
  },
  code: {
    fontFamily: 'monospace, monospace',
  },
});

export default DetailScreen;

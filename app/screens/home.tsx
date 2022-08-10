import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TextLink} from 'solito/link';
import styled from 'styled-components/native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title>Welcome to React Native for Web</Title>
      </View>
      <Text>
        This starter project enables you to build web application using React
        Native module. .
      </Text>
      <Link textProps={{style: {color: 'blue'}}} href="/detail">
        Details
      </Link>
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
    fontSize: '1.5pt',
    marginVertical: '1pt',
    textAlign: 'center',
  },
  text: {
    marginVertical: '1pt',
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

const Title = styled(Text)`
  font-size: 25px;
  text-align: center;
  color: palevioletred;
`;

const Link = styled(TextLink)`
  color: blue;
`;

export default HomeScreen;

import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TextLink} from 'solito/link';

function Link(props: any) {
  return (
    <Text
      {...props}
      accessibilityRole="link"
      style={StyleSheet.compose(styles.link, props.style)}
    />
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Welcome to React Native for Web</Text>
      </View>
      <Text>
        This starter project enables you to build web application using React
        Native module. .
      </Text>
      <Text style={styles.text}>
        Built with{' '}
        <Link href="https://github.com/facebook/create-react-app">
          Create React App
        </Link>{' '}
        and{' '}
        <Link href="https://github.com/necolas/react-native-web">
          React Native for Web
        </Link>{' '}
        <TextLink href="/screens/detail">Details</TextLink>
      </Text>
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

export default HomeScreen;

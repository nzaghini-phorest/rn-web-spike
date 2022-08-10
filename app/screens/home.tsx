import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TextLink} from 'solito/link';
import styled from 'styled-components/native';
import Confetti from '../components/Confetti';
import {Animations} from '../resources/animations/animations';
import LottieView from 'lottie-react-native';

function HomeScreen() {
  const [showConfetti, setShowConfetti] = useState(true);

  return (
    <View style={styles.container}>
      {showConfetti && <Confetti onFinish={() => setShowConfetti(false)} />}
      <View style={styles.header}>
        <Title>Welcome to React Native for Web</Title>
      </View>
      {/*onAnimationFinish={onAnimationFinish}*/}
      <LottieView
        source={Animations.common.greenTickSuccess}
        autoPlay={true}
        loop={true}
        style={{height: 300, alignSelf: 'center'}}
      />
      <Text>I am written in react native but I can run on web too!</Text>
      <Link href="/detail">Details</Link>
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
  font-size: 10px;
`;

export default HomeScreen;

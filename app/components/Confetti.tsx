import LottieView from 'lottie-react-native';
import React from 'react';

import {Animations} from '../resources/animations/animations';

const Confetti = (props: {onFinish: () => void}) => {
  return (
    <LottieView
      source={Animations.common.confetti}
      autoPlay={true}
      loop={false}
      onAnimationFinish={props.onFinish}
    />
  );
};

export default Confetti;

export const TEST_IDS = {};

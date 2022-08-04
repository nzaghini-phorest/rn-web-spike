import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../../../screens/home';
import DetailScreen from '../../../../screens/detail';

const Stack = createNativeStackNavigator<{
  home: undefined;
  detail: {
    id: string;
  };
}>();

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="detail"
        component={DetailScreen}
        options={{
          title: 'Detail',
        }}
      />
    </Stack.Navigator>
  );
}

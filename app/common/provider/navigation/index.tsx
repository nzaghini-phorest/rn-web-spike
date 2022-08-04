import React, {ReactNode, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';

export function NavigationProvider({children}: {children: ReactNode}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: ['/'],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              detail: 'detail',
            },
          },
        }),
        [],
      )}
      // onStateChange={props.onStateChange}
      // onReady={props.onReady}
      // ref={navigationRef}
    >
      {children}
    </NavigationContainer>
  );
}

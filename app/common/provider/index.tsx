import React from 'react';
import {NavigationProvider} from './navigation';

export function Provider({children}: {children: React.ReactNode}) {
  return (
    <NavigationProvider>
      {/*<Dripsy>{children}</Dripsy>*/}
      {children}
    </NavigationProvider>
  );
}

import React from 'react';
import {NavigationProvider} from './navigation';
import {Provider as ReduxProvider} from 'react-redux';
import store, {persistor} from '../store/store/store';
import {PersistGate} from 'redux-persist/integration/react';

export function Provider({children}: {children: React.ReactNode}) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationProvider>{children}</NavigationProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

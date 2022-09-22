import React from 'react';
import HomeScreen from './screens/home';
import {Provider} from './common/provider';

function App() {
  return (
    <Provider>
      <HomeScreen />
    </Provider>
  );
}

export default App;

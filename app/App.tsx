import React, {useState} from 'react';
import {Provider} from './common/provider';
import {NativeNavigation} from './common/provider/navigation/native';

function App() {
  useState(0);

  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  );
}

export default App;

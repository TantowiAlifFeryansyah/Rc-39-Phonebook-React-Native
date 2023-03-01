import React from 'react';

import { Provider } from 'react-redux';
import User from './src/features/user/User';

import { store } from './src/app/store';

import TampilanAwal from './src/components/TampilanAwal';

function App() {
  return (
    <Provider store={store}>
      {/* <User /> */}
      <TampilanAwal/>
    </Provider>
  )
}

export default App;

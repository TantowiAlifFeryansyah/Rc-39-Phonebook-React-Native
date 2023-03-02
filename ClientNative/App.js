import React from 'react';

import { Provider } from 'react-redux';
import User from './src/features/user/User';

import { store } from './src/app/store';

import User2 from './src/features/user/User2';

function App() {
  return (
    <Provider store={store}>
      <User />
      {/* <User2/> */}
    </Provider>
  )
}

export default App;

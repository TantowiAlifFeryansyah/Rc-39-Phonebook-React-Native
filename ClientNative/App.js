import React from 'react';

import { Provider } from 'react-redux';
import User from './src/features/user/User';

import { store } from './src/app/store';

import UserList from './src/features/user/UserList';

function App() {
  return (
    <Provider store={store}>
      <User />
      {/* <UserList /> */}
    </Provider>
  )
}

export default App;

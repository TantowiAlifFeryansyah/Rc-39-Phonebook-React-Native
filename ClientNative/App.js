import React from 'react';

import { Provider } from 'react-redux';
import User from './src/features/user/User';

import { store } from './src/app/store';

import User2 from './src/features/user/User2';
import UserList from './src/features/user/UserList';
import UserItem2 from './src/components/UserItem';

function App() {
  return (
    <Provider store={store}>
      <User />
      {/* <UserItem2 /> */}
      {/* <UserList /> */}
      {/* <User2/> */}
    </Provider>
  )
}

export default App;

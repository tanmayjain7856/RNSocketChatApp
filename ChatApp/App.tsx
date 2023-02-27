import React from 'react';
import RootNavigator from './source/navigations/RootNavigator';
import {action} from './source/redux/action';
import {store} from './source/redux/store';

export default function App() {
  store.subscribe(() => {
    console.log('message', store.getState());
  });

  store.dispatch(action);

  return <RootNavigator />;
}

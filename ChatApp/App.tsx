import React from 'react';
import RootNavigator from './source/navigations/RootNavigator';
import {store} from './source/redux/store';

export default function App() {
  store.subscribe(() => {
    console.log('message', store.getState());
  });

  return <RootNavigator />;
}

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import StackNavigator from './src/navigation/navigator';
import store from './src/redux/store';
import "redux";

const App = () => {
  return (
    <Provider store={store}>
        <StackNavigator />
    </Provider>
  );
}

export default App;

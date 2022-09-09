import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Router from './src/Router';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;

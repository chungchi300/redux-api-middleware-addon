// Import React and React-dom.
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// Import the components.
import Shop from './component/Shop';
import configureStore from './configureStore';
// Define the root element.

const root = document.querySelector('main');

const store = configureStore();
// Append the DummyComponent to the root element.
ReactDOM.render(
  <Provider store={store}>

    <Shop />

  </Provider>,
  root
);

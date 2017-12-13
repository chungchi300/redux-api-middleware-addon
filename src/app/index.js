// Import React and React-dom.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Import the components.
import Shop from './component/Shop';
import configureStore from './configureStore';
// Define the root element.

const root = document.querySelector('main');
import { request } from 'actions';
import { BASIC, entity } from 'helpers/api';
const store = configureStore();
store.dispatch({
  type: 'API:SET_PROTOCOL',
  payload: 'https',
});
store
  .dispatch(
    request(
      '/pet/findByStatus',
      {
        method: 'get',
        data: { status: 'available' },
        subst: null,
      },
      BASIC
    )
  )
  .then(res => console.log(res));
store
  .dispatch(
    request(
      '/pet/findByStatus',
      {
        method: 'get',
        data: { status: 'available' },
        subst: null,
      },
      entity('PETS_BY_ID')
    )
  )
  .then(res => console.log(res));
// Append the DummyComponent to the root element.
ReactDOM.render(
  <Provider store={store}>
    <Shop />
  </Provider>,
  root
);

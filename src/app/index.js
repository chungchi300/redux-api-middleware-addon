// Import React and React-dom.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Import the components.

import configureStore from './configureStore';
// Define the root element.
import SWAGGER from 'swagger.js';

const root = document.querySelector('main');
import * as Action from 'actions';
import { BASIC, entity } from 'helpers/api';
import PetList from './view/PetList';
const store = configureStore();
store.dispatch(Action.setProtocol('https'));

store.dispatch(Action.setSwagger(SWAGGER));
store.dispatch(
  Action.setHeaders({
    // 'X-Token': 'base64TokenForApiCall',
    Accept: 'application/json',
    ['Content-Type']: 'application/json',
  })
);
store
  .dispatch(
    Action.request(
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
    Action.request(
      '/pet',
      {
        method: 'post',
        data: {
          name: 'ronald',
          id: 3,
          photoUrls: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Letter_d.svg/1200px-Letter_d.svg.png',
          ],
        },
      },
      BASIC
    )
  )
  .then(res => console.log(res));
store
  .dispatch(
    Action.request(
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
    <PetList />
  </Provider>,
  root
);

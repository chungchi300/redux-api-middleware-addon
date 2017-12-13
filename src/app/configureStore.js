import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  // Middleware you want to use in development:
  applyMiddleware(thunk, apiMiddleware)
  // Required! Enable Redux DevTools with the monitors you chose
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}

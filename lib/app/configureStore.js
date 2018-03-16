'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxApiMiddleware = require('redux-api-middleware');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var enhancer = composeEnhancers(
// Middleware you want to use in development:
(0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxApiMiddleware.apiMiddleware)
// Required! Enable Redux DevTools with the monitors you chose
);

function configureStore(initialState) {
  return (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
}
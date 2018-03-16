'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends5 = require('babel-runtime/helpers/extends');

var _extends6 = _interopRequireDefault(_extends5);

exports.default = network;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function network() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (true) {
    case action.type == 'SUCCESS':
      console.log('action', action);
      return (0, _extends6.default)({}, state, (0, _defineProperty3.default)({}, action.meta.name, 'SUCCESS'));

    case action.type == 'FAILURE':
      return (0, _extends6.default)({}, state, (0, _defineProperty3.default)({}, action.meta.name, 'FAILURE'));

    case action.type == 'REQUEST':
      return (0, _extends6.default)({}, state, (0, _defineProperty3.default)({}, action.meta.name, 'REQUEST'));
  }
  return state;
}
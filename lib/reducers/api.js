"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = api;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function api() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { protocol: "http", contentType: "", headers: {} };
  var action = arguments[1];

  switch (action.type) {
    case "API:SET_BASE_HEADERS":
      return (0, _extends3.default)({}, state, { headers: action.payload.headers });
    case "API:SET_SWAGGER":
      return (0, _extends3.default)({}, state, action.payload);
    case "API:SET_PROTOCOL":
      return (0, _extends3.default)({}, state, { protocol: action.payload });
  }
  return state;
}
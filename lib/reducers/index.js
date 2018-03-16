'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _network = require('./network');

var _network2 = _interopRequireDefault(_network);

var _domain = require('./domain');

var _domain2 = _interopRequireDefault(_domain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  return {
    api: (0, _api2.default)(state.api, action),
    network: (0, _network2.default)(state.network, action),
    domain: (0, _domain2.default)(state.domain, action)
  };
};
exports.default = rootReducer;
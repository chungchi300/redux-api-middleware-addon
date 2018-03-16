'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('reducers/api');

var _api2 = _interopRequireDefault(_api);

var _domain = require('reducers/domain');

var _domain2 = _interopRequireDefault(_domain);

var _network = require('reducers/network');

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  domain: _domain2.default,
  network: _network2.default,
  api: _api2.default
};
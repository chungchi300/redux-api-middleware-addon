'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var request = exports.request = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(pathName, _ref, types) {
    var method = _ref.method,
        data = _ref.data,
        subst = _ref.subst;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return 'yolo';

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function request(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.setProtocol = setProtocol;
exports.setSwagger = setSwagger;
exports.setHeaders = setHeaders;

var _urijs = require('urijs');

var _urijs2 = _interopRequireDefault(_urijs);

var _reduxApiMiddleware = require('redux-api-middleware');

var _queryString = require('query-string');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _api = require('helpers/api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setProtocol(protocol) {
  return {
    type: 'API:SET_PROTOCOL',
    payload: protocol
  };
}

function setSwagger(swagger) {
  return {
    type: 'API:SET_SWAGGER',
    payload: swagger
  };
}
function setHeaders(headers) {
  return {
    type: 'API:SET_BASE_HEADERS',
    payload: {
      headers: headers
    }
  };
}
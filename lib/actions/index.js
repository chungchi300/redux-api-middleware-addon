'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var request = exports.request = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(pathName, _ref, types) {
    var _this = this;

    var method = _ref.method,
        data = _ref.data,
        subst = _ref.subst;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', function () {
              var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
                var pathEntity, entityPath, realPath, headers, body, result;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        pathEntity = _lodash2.default.get(getState().api.paths, pathName);
                        entityPath = pathName;

                        if (subst) {
                          entityPath = (0, _api.subsituteUrl)(pathName, subst);
                        }
                        realPath = entityPath;

                        // //TODO Header should be create by Header constructor instead of plain object

                        headers = (0, _extends3.default)({}, getState().api.headers, pathEntity.headers);
                        body = void 0;

                        if (method == 'get' && data) {
                          realPath = realPath + '?' + (0, _queryString.stringify)(data);
                        } else {
                          body = (0, _api.formData)(data, headers['Content-Type']);
                        }

                        if (headers['Content-Type'] === 'multipart/form-data') {
                          delete headers['Content-Type'];
                          delete headers['content-type'];
                        }
                        //
                        result = {
                          endpoint: getState().api.protocol + '://' + getState().api.host + getState().api.basePath + realPath,
                          method: method,

                          headers: headers,
                          body: body,
                          types: (0, _api.processType)(types, pathName, method)
                        };
                        _context.next = 11;
                        return dispatch((0, _defineProperty3.default)({}, _reduxApiMiddleware.CALL_API, result));

                      case 11:
                        return _context.abrupt('return', _context.sent);

                      case 12:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x4, _x5) {
                return _ref3.apply(this, arguments);
              };
            }());

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
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

var _api = require('../helpers/api');

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
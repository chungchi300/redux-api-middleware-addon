'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.setProtocol = setProtocol;
exports.setSwagger = setSwagger;
exports.setHeaders = setHeaders;
exports.request = request;

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
function request(pathName, _ref, types) {
  var method = _ref.method,
      data = _ref.data,
      subst = _ref.subst;

  var pathEntity = _lodash2.default.get(getState().api.paths, pathName);

  var entityPath = pathName;
  if (subst) {
    entityPath = (0, _api.subsituteUrl)(pathName, subst);
  }
  var realPath = entityPath;

  // //TODO Header should be create by Header constructor instead of plain object
  var headers = (0, _extends3.default)({}, getState().api.headers, pathEntity.headers);
  var body = void 0;
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
  var result = {
    endpoint: getState().api.protocol + '://' + getState().api.host + getState().api.basePath + realPath,
    method: method,

    headers: headers,
    body: body,
    types: (0, _api.processType)(types, pathName, method)
  };
  return (0, _defineProperty3.default)({}, _reduxApiMiddleware.CALL_API, result);
}
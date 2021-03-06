"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForAWhile = exports.BASIC = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var waitForAWhile = exports.waitForAWhile = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return sleep(3000);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function waitForAWhile() {
    return _ref.apply(this, arguments);
  };
}();

exports.sleep = sleep;
exports.entity = entity;
exports.formData = formData;
exports.processType = processType;
exports.subsituteUrl = subsituteUrl;

var _formData2 = require("form-data");

var _formData3 = _interopRequireDefault(_formData2);

var _queryString = require("query-string");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// mapById(['entity']);
// defaultGuessing by name;
var BASIC = exports.BASIC = ["REQUEST", "SUCCESS", "FAILURE"];

// ['REQUEST', 'SUCESS', 'FAILURE'];
function sleep(ms) {
  return new _promise2.default(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
function entity(name) {
  return ["REQUEST", {
    type: "SUCCESS",
    meta: { data: name },
    payload: function payload(action, state, res) {
      return res.json();
    }
  }, "FAILURE"];
}
function formData(dataMap, contentType) {
  if (!dataMap) return null;
  if (contentType === "multipart/form-data") {
    var _formData = new _formData3.default();

    (0, _keys2.default)(dataMap).forEach(function (key) {
      return _formData.append(key, dataMap[key]);
    });

    return _formData;
  } else if (contentType === "application/x-www-form-urlencoded") {
    return (0, _queryString.stringify)(dataMap);
  } else if (contentType === "application/json") {
    return (0, _stringify2.default)(dataMap);
  } else {
    throw new Error("unknown contentType for " + contentType);
  }
}
function getConventionalName(pathName, method) {
  return method + pathName.replace(/\{.*\}/g, "").replace(/\/(.)/g, function ($1) {
    return $1.toUpperCase();
  }).replace(/\//g, "");
}
function processType(types, pathName, method) {
  var originalTypes = _lodash2.default.cloneDeep(types);
  var processedTypes = [];

  originalTypes = originalTypes.map(function (originalType) {
    if (typeof originalType == "string") {
      return { type: originalType };
    } else {
      return originalType;
    }
  });
  console.log("types", types);
  processedTypes[0] = (0, _extends3.default)({}, originalTypes[0], {
    meta: (0, _extends3.default)({
      path: pathName,
      name: getConventionalName(pathName, method),
      method: method
    }, originalTypes[0].meta)
  });
  processedTypes[1] = (0, _extends3.default)({}, originalTypes[1], {
    meta: (0, _extends3.default)({
      path: pathName,
      name: getConventionalName(pathName, method),
      method: method
    }, originalTypes[1].meta)
  });
  processedTypes[2] = (0, _extends3.default)({}, originalTypes[2], {
    meta: (0, _extends3.default)({
      path: pathName,
      name: getConventionalName(pathName, method),
      method: method
    }, originalTypes[2].meta)
  });

  return processedTypes;
}
function subsituteUrl(url, substitues) {
  var finalUrl = url;

  (0, _keys2.default)(substitues).forEach(function (key, index) {
    finalUrl = finalUrl.replace("{" + key + "}", substitues[key]);
  });
  return finalUrl;
}
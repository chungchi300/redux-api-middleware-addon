'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = domain;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function domain() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  var idsRegexResult = /^(.+)S_BY_ID$/.exec(_lodash2.default.get(action, 'meta.data'));

  switch (true) {
    case idsRegexResult != null:
      var relatedIdsName = _lodash2.default.camelCase(idsRegexResult[1]) + 'sById';
      var newObjectWithIds = {};
      newObjectWithIds[relatedIdsName] = action.payload;

      return (0, _extends3.default)({}, state, newObjectWithIds);
  }
  return state;
}
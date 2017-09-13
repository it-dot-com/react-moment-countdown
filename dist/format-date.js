'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatDate;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatDate(fromDate, toDate, mask) {
  var delta = (0, _moment2.default)(toDate).diff((0, _moment2.default)(fromDate));

  return (0, _moment2.default)(delta).format(mask);
}
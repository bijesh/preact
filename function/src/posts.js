"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPosts;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPosts() {
  return (0, _isomorphicFetch.default)('http://localhost:3005/posts').then(function (res) {
    return res.json();
  });
}
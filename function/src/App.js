"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

function App(props) {
  var posts = props.posts.map(function (post, i) {
    return (0, _preact.h)("li", {
      key: i
    }, post.title);
  });
  return (0, _preact.h)("ul", null, posts);
}

var _default = App;
exports.default = _default;
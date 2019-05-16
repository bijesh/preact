"use strict";

var _preact = require("preact");

var _App = _interopRequireDefault(require("./App"));

var _posts = _interopRequireDefault(require("./posts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (window.__posts__) {
  renderApp(window.__posts__);
} else {
  (0, _posts.default)().then(renderApp);
}

function renderApp(posts) {
  (0, _preact.render)((0, _preact.h)(_App.default, {
    posts: posts
  }), document.querySelector('body'), document.querySelector('#root'));
}
"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("./src/App"));

var _posts = _interopRequireDefault(require("./src/posts"));

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = _fs.default.readFileSync(__dirname + '/index.html', 'utf8');

var app = (0, _express.default)();
app.get('**', function (req, res) {
  (0, _posts.default)().then(function (posts) {
    var html = (0, _server.renderToString)(_react.default.createElement(_App.default, {
      posts: posts
    }));
    var finalHtml = index.replace('<!---:: APP :: --->', html);
    res.send(finalHtml);
  });
});
app.listen(3006);
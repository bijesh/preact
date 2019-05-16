"use strict";

var _preact = require("preact");

var _preactRenderToString = require("preact-render-to-string");

var _App = _interopRequireDefault(require("./src/App"));

var _posts = _interopRequireDefault(require("./src/posts"));

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = _fs.default.readFileSync(__dirname + '/index.html', 'utf8');

var app = (0, _express.default)();
app.get('**', function (req, res) {
  (0, _posts.default)().then(function (posts) {
    var html = (0, _preactRenderToString.render)((0, _preact.h)(_App.default, {
      posts: posts
    }));
    var postsHtml = index.replace('<!---:: APP :: --->', html);
    var finalHtml = postsHtml.replace(index.replace('/** ::POSTS:: **/', JSON.stringify(posts)));
    res.send(finalHtml);
  });
});
app.listen(3007);
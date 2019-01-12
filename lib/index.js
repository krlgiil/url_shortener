"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.set('views', './src/views');
app.set('view engine', 'pug');
app.get('/', function (req, res) {
  res.render('homepage');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
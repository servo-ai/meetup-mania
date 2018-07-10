var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();
app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


//app.use('/', routes);
app.use(function (req, res, next) {
  if (path.extname(req.path).length > 0) {
    // normal static file request
    next();
  } else {
    // should force return `index.html` for angular.js
    req.url = '/index.html';
    next();
  }
});
app.use(express.static(__dirname));

var port1 = 8081
app.listen(port1, function () {
  console.log("server app listening on port " + port1);
});

module.exports = app;
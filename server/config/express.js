var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(app){

  // set public dir
  app.use(express.static(__dirname + '/../../public'));

  // set default view engine
  app.set('view engine', 'ejs');

  // standard POST request body parser
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse json
  app.use(bodyParser.json());

  // set default view directory
  app.set('views', __dirname + '/../views');

};
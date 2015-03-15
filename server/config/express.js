var express = require('express');

module.exports = function(app){

  // set public dir
  app.use(express.static(__dirname + '/../../public'));

  // set default view engine
  app.set('view engine', 'ejs');

  // set default view directory
  app.set('views', __dirname + '/../views');

};
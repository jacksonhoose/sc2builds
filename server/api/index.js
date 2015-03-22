var router = require('express').Router();

module.exports = function(app){

  // pass main router to resource indexes
  // one router is shared and added to until
  // it is mounted to the /api root
  require('./auth')(router);
  require('./user')(router);
  require('./build')(router);
  require('./comment')(router);

  // mount router to /api
  app.use('/api', router);

  // catch all for all other routes
  app.get('/*', function(req, res, next){
    res.render('index.ejs');
  });

};
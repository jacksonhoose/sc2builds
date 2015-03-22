var router = require('express').Router();

module.exports = function(app){

  router.all('*', function(req, res, next){
    
    // if limit is in query string and its 
    // less than 25 user it otherwise limit to 12
    if(req.query.limit){
      req.limit = (req.query.limit && req.query.limit <= 25) 
                  ? parseInt(req.query.limit, 10) : 12;
    }

    // parse offset if its specified
    if(req.query.offset){
      req.offset = req.query.offset 
                  ? parseInt(req.query.offset, 10) : 0;
    }
    next();
  });
  
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
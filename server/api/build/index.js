var buildController = require('./buildController');

module.exports = function(router){
  // list of builds
  router.get('/build', buildController.list);
  // show a specific build
  router.get('/build/:buildId', buildController.show);
  // create a build
  router.post('/build/create', buildController.create);
  // update a build
  router.put('/build/:buildId', buildController.update);
};
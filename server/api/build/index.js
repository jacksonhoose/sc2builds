var buildController = require('./buildController');

module.exports = function(router){
  // list of builds
  // router.get('/builds', buildController.list);
  // show a specific build
  // router.get('/builds/:buildId', buildController.show);
  // create a build
  // router.post('/builds', buildController.create);
  // update a build
  // router.put('/builds/:buildId', buildController.update);

  router.route('/builds')
    .get(buildController.list)
    .post(buildController.create);

  router.route('/builds/:buildId')
    .get(buildController.show)
    .put(buildController.update)
    .delete(buildController.destroy);

};
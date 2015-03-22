var userController = require('./userController');

module.exports = function(router){

  router.route('/users')
    .get(userController.list)
    .post(userController.create);

  router.route('/users/:userId')
    .get(userController.show)
    .put(userController.update)
    .delete(userController.destroy);

  router.get('/users/:userId/comments', userController.listComments);
  router.get('/users/:userId/builds', userController.listBuilds);

  // router.get('/users', userController.list);
  // router.get('/users/:userId', userController.show);
  // router.put('/users/:userId', userController.update);
  // router.delete('/users/:userId', userController.update);
  // list user comments
  // router.get('/users/:userId/comments', userController.listComments);
  // list user builds
  // router.get('/users/:userId/builds', userController.listBuilds);

};
var userController = require('./userController');
var _ = require('lodash');

module.exports = function(router){

  router.route('/users')
    .get(userController.list)
    .post(userController.create);

  router.route('/users/:userId')
    .all(function(req, res, next){
      // var userQuery = {};
      // if(isNaN(parseInt(req.params.userId, 10))){
      //   userQuery.username = req.params.userId;
      // } else {
      //   userQuery.id = req.params.userId;
      // }
      // req.userQuery = userQuery;
      // next();
    })
    .get(userController.show)
    .put(userController.update)
    .delete(userController.destroy);

  router.get('/users/:userId/comments', userController.comments);
  router.get('/users/:userId/builds', userController.builds);


};
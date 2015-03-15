var userController = require('./userController');

module.exports = function(router){

  router.get('/user/:userId', userController.show);

};
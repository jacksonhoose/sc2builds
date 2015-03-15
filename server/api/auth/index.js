var authController = require('./authController');

module.exports = function(router){

  router.get('/auth/login', authController.login);
  router.post('/auth/signup', authController.signup);

};
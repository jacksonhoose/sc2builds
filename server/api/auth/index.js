var authController = require('./authController');

module.exports = function(router){

  router.post('/auth/login', authController.login);
  router.post('/auth/signup', authController.signup);
  router.post('/auth/validate', authController.validate);

};
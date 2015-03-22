var authController = require('./authController');

module.exports = function(router){

  // log a user in
  router.post('/auth/login', authController.login);
  // sign a user up
  router.post('/auth/signup', authController.signup);
  // validate a specific jwt if its in local storage
  router.post('/auth/validate', authController.validate);

};
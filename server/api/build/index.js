var buildController = require('./buildController');

module.exports = function(router){

  router.get('/build/:buildId', buildController.show);

};
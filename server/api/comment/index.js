var commentController = require('./commentController');

module.exports = function(router){

  router.get('/comment/:commentId', commentController.show);

};
var commentController = require('./commentController');

module.exports = function(router){

  // get a comment
  router.get('/comments/:commentId', commentController.show);
  // create a comment
  router.post('/comments', commentController.create);
  // update a comment
  router.put('/comments/:commentId', commentController.update);
  // destory a comment
  router.delete('/comments/:commentId', commentController.destroy);

};
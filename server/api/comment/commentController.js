module.exports.show = function(req, res, next){
  res.json({ message: 'Show Comment ' + req.params.commentId });
};
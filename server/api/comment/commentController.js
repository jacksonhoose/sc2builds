var Comment = require('../../db/models/commentModel');

module.exports.show = function(req, res, next){
  res.json({ message: 'Show Comment ' + req.params.commentId });
};

module.exports.create = function(req, res, next){
  res.json({ message: 'Show Comment ' + req.params.commentId });
};

module.exports.update = function(req, res, next){
  res.json({ message: 'Show Comment ' + req.params.commentId });
};

module.exports.destroy = function(req, res, next){
  res.json({ message: 'Show Comment ' + req.params.commentId });
};
module.exports.show = function(req, res, next){
  res.json({ message: 'Show User ' + req.params.userId });
};
var User = require('../../db/models/userModel');

module.exports.show = function(req, res, next){
  res.json({ message: 'Show User ' + req.params.userId });
};

module.exports.update = function(req, res, next){
  var user = req.user;

  if(!user){
    return res.status(401).end();
  }

  var fields = req.body;

  User.forge({
    username: user.id
  }).save(fields, { patch: true }).then(function(user){
    res.json({ user: user });
  });


  res.json({ message: 'Show User ' + req.params.userId });
};
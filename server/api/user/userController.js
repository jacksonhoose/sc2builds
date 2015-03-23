var User = require('../../db/models/userModel');
var Users = require('../../db/collections/userCollection');

module.exports.list = function(req, res, next){
  var limit = req.limit;
  var offset = req.offset;

  User.collection().query(function(query){
    // provide limiting and offset query params
    return query.limit(limit).offset(offset);
  }).fetch().then(function(users){
    res.status(200).json({ 
      error: false, 
      data: users,
      limit: limit,
      offset: offset
    });
  }).catch(function(err){
    res.json({ message: 'Error querying users' });
  });

};

module.exports.create = function(req, res, next){
  res.json({ message: 'create a user' });
};

module.exports.show = function(req, res, next){

  User.forge({
    id: req.params.userId
  }).fetch().then(function(user){
    res.json({ user: user.omit('password') });
  }).catch(function(err){
    res.json({ message: 'User not found' });
  });

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
    res.json({ user: user.omit('password') });
  }).catch(function(err){
    res.json({ message: 'Error updating user' });
  });

};

module.exports.destroy = function(req, res, next){
  var userId = req.params.userId;

  res.json({ message: 'Destroy a user and associated resources '});

};

module.exports.comments = function(req, res, next){
  var userId = req.params.userId;

  User.forge({
    id: userId
  }).fetch({
    withRelated: ['comments']
  }).then(function(user){
    res.status(200).json({
      error: false,
      data: user
    });
  }).otherwise(function(err){
    console.log('error', err);
    res.json({
      error: true,
      data: err
    });
  });

};

module.exports.builds = function(req, res, next){
  var userId = req.params.userId;

  User.forge({
    id: userId
  }).fetch({
    withRelated: ['builds']
  }).then(function(user){
    res.status(200).json({
      error: false,
      data: user
    });
  }).otherwise(function(err){
    res.json({
      error: true,
      data: err
    });
  });

};
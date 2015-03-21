var User = require('../../db/models/userModel');
var jwt = require('jsonwebtoken');

module.exports.login = function(req, res, next){
  var username = req.body.username;
  var password = req.body.password;

  User.login(username, password).then(function(user){
    if(user){
      res.status(200).json({ 
        token: jwt.sign(user, 'tokenSecret'),
        user: user.omit('password') 
      });
    } else {
      res.status(200).json({ user: false });
    }
  }).catch(function(err){
    // error logging in
  });

};

module.exports.signup = function(req, res, next){
  var username = req.body.username;
  var password = req.body.password;

  if(!username || !password) return res.json({
    message: 'Username and password are required.'
  });

  var user = new User({
    username: username
  });

  // fetch user based on username 
  // confirm username isn't taken
  user.fetch().then(function(foundUser){
    // if the user isnt found the username is available
    if(!foundUser){
      // set the password on the class instance and save
      user.set('password', password);
      user.save().then(function(newUser){
        // return user object with token
        res.status(201).json({
          user: newUser.omit('password'),
          token: jwt.sign(user, 'tokenSecret')
        });
      });
    } else {
      res.json({
        message: 'Username already taken'
      });
    }
  });

};

module.exports.validate = function(req, res, next){
  var user = req.user;
  if(user){
    return res.json({ user: user });
  } else {
    return res.json({ user: false });
  }
};
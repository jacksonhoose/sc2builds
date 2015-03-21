var Reflux = require('reflux');
var Promise = require('bluebird');
var request = require('superagent');

var actions = Reflux.createActions([
  // auth actions
  'login',
  'logout',
  'signup',

  // user actions
  // 'updatePassword',
  // 'getInterests',
  // 'updateInterests',
  'updateProfile'
]);

actions.login.preEmit = function(username, password){
  return new Promise(function(resolve, reject){
    request
      .post('/api/auth/login')
      .send({
        username: username,
        password: password
      })
      .end(function(err, response){
        if(!err && response.status === 200){
          resolve(response.body);
        } else {
          reject(err);
        }
      });
  })
};

actions.signup.preEmit = function(username, password){
  return new Promise(function(resolve, reject){
    request
      .post('/api/auth/signup')
      .send({
        username: username,
        password: password
      })
      .end(function(err, response){
        if(!err && response.status === 201){
          resolve(response.body);
        } else {
          reject(err);
        }
      });
  });
};

actions.updateProfile.preEmit = function(profile){
  console.log(profile);
  return new Promise(function(resolve, reject){
    request
      .put('/api/user')
      .send(profile)
      .end(function(err, response){
        if(!err){
          resolve(response.body);
        } else {
          reject(err);
        }
      });
  });
};

module.exports = actions;
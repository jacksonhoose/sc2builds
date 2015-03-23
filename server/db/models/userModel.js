var db = require('../../db');
var checkit = require('checkit');
var Promise = require('bluebird');
var bcrypt = require('bcrypt');
var genSalt = Promise.promisify(bcrypt.genSalt);
var hash = Promise.promisify(bcrypt.hash);
var compare = Promise.promisify(bcrypt.compare);

var Comment = require('./commentModel');
var Build = require('./buildModel');

var User = db.Model.extend({

  tableName: 'users',

  hasTimestamps: true,

  initialize: function(){
    this.on('saving', this.validateSave);
    this.on('creating', this.hashPassword);
  },

  validateSave: function(){
    // validate model on save
    return checkit({
      username: ['required']
    }).run(this.attributes);
  },

  hashPassword: function(){
    var password = this.get('password');
    return genSalt(10).then(function(salt){
      return hash(password, salt);
    }).then(function(hash){
      this.set('password', hash);
    }.bind(this));
  },

  comments: function(){
    this.hasMany(Comment, 'user_id');
  },

  builds: function(){
    this.hasMany(Build, 'user_id');
  }

}, {  

  login: Promise.method(function(username, password){
    if(!username || !password) throw new Error('Username and password are both required.');
    return new this({ username: username }).fetch({ require: true }).then(function(user){
      return compare(password, user.get('password')).then(function(match){
        if(match){
          return user;
        } else {
          return false;
        }
      })
    });
  })

});

var Users = db.Collection.extend({
  model: User
});


module.exports = User;
var checkit = require('checkit');
var Promise = require('bluebird');
var bcrypt = Promise.promisifyAll(require('bcrypt'));

var User = bookshelf.Model.extend({

  initialize: function(){
    this.on('saving', this.validateSave);
    this.on('creating', this.hashPassword);
  },

  validateSave: function(){
    // validate model on save
    return checkit({
      username: ['required'],
      email: ['required', 'email'],
      password: ['required']
    }).run(this.attributes);
  },

  hashPassword: function(){
    var password = this.get('password');
    var self = this;
    return bcrypt.genSalt(10).then(function(salt){
      return bcrypt.hash(password, salt);
    }).then(function(hash){
      self.set('password', hash);
    });
  },

  comments: function(){
    this.hasMany(Comment);
  },

  builds: function(){
    this.hasMany(Build);
  }

}, {  

  login: Promise.method(function(email, password){
    if(!email || !password) throw new Error('Email and password are both required.');
    return new this({ email: email.toLowerCase().trim() }).fetch({ require: true }).tap(function(user){
      return bcrypt.compare(user.get('password'), password);
    });
  })

});
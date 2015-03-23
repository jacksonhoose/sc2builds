var db = require('../../db');

var Step = require('./stepModel');
var User = require('./userModel');
var Comment = require('./commentModel');

var Build = db.Model.extend({

  tableName: 'builds',

  hasTimestamps: true,

  defaults: function(){
    return {
      published: 0
    };
  },

  initialize: function(){
    this.on('saving', this.validateSave);
  },

  validateSave: function(){
    // validate model on save
    // return checkit({
    //   username: ['required'],
    //   email: ['required', 'email'],
    //   password: ['required']
    // }).run(this.attributes);
  },

  user: function(){
    return this.belongsTo('User', 'user_id');
  },

  steps: function(){
    return this.hasMany('Step', 'build_id');
  },

  comments: function(){
    return this.hasMany('Comment', 'build_id');
  }

});

module.exports = db.model('Build', Build);
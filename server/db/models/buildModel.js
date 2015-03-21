var db = require('../../db');

var Build = db.Model.extend({

  tableName: 'builds',

  hasTimestamps: true,

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
    return this.belongsTo(User);
  },

  steps: function(){
    return this.hasMany(Step);
  },

  comments: function(){
    return this.hasMany(Comment);
  }

});

module.exports = Build;
var db = require('../../db');

var Video = bookshelf.Model.extend({

  tableName: 'videos',

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

  build: function(){
    return this.belongsTo(Build);
  }

});

module.exports = Video;
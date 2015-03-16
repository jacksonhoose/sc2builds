var Build = bookshelf.Model.extend({

  tableName: 'builds',

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

  comments: function(){
    return this.hasMany(Comment);
  }

});
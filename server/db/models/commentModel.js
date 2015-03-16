var Comment = bookshelf.Model.extend({

  tableName: 'comments',

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
  },

  user: function(){
    return this.belongsTo(User);
  }

});
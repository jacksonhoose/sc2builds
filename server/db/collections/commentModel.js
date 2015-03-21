var Comment = require('../models/commentModel');

var Comments = Bookshelf.Collection.extend({
  model: Comment
});

module.exports = Comments;
var db = require('../../db');
var User = require('../models/commentModel');

var Users = db.Collection.extend({
  model: User
});

module.exports = Users;
var Build = require('../models/buildModel');

var Builds = Bookshelf.Collection.extend({
  model: Build
});

module.exports = Builds;
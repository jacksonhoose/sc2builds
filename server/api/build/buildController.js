var Build = require('../../db/models/buildModel');

module.exports.list = function(req, res, next){

  // {
  //   username: 
  //   limit:
  //   comments:
  //   offset:
  // }

  // Build.forge().limit(12).fetch().then(function(results){
  // });
};

module.exports.show = function(req, res, next){
  res.json({ message: 'Show Build ' + req.params.buildId });
};

module.exports.create = function(req, res, next){
  res.json({ message: 'Show Build ' + req.params.buildId });
};

module.exports.update = function(req, res, next){
  res.json({ message: 'Show Build ' + req.params.buildId });
};
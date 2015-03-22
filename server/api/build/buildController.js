var Build = require('../../db/models/buildModel');

module.exports.list = function(req, res, next){

  // if limit is in query string and its 
  // less than 25 user it otherwise limit to 12
  var limit = (req.query.limit && req.query.limit <= 25) 
              ? parseInt(req.query.limit, 10) : 12;

  var offset = req.query.offset 
              ? parseInt(req.query.offset, 10) : 0;

  Build.collection().query(function(query){
    // provide limiting and offset query params
    return query.limit(limit).offset(offset);
  }).fetch().then(function(builds){
    res.json({ builds: builds });
  }).catch(function(err){
    res.json({ message: 'Error querying builds' });
  });

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
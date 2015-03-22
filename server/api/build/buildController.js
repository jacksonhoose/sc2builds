var Build = require('../../db/models/buildModel');

module.exports.list = function(req, res, next){
  var limit = req.limit;
  var offset = req.offset;

  Build.collection().query(function(query){
    // provide limiting and offset query params
    return query.limit(limit).offset(offset);
  }).fetch().then(function(builds){
    res.json({ builds: builds });
  }).catch(function(err){
    res.json({ message: 'Error querying builds' });
  });

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

module.exports.destroy = function(req, res, next){
  res.json({ message: 'destroy Build ' + req.params.buildId });
};
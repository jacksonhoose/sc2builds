var Build = require('../../db/models/buildModel');

module.exports.list = function(req, res, next){
  var limit = req.limit;
  var offset = req.offset;

  Build.collection().query(function(query){
    // provide limiting and offset query params
    return query.limit(limit).offset(offset);
  }).fetch().then(function(builds){
    res.status(200).json({ 
      error: false, 
      data: builds,
      limit: limit,
      offset: offset
    });
  }).catch(function(err){
    res.json({ message: 'Error querying builds' });
  });

};

module.exports.show = function(req, res, next){

  Build.forge({
    id: req.params.buildId
  }).fetch().then(function(build){
    res.json({ error: false, data: build });
  }).otherwise(function(err){
    res.json({ error: true, data: err });
  });

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
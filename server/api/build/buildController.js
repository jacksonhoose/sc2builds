module.exports.list = function(req, res, next){
  res.json({ message: 'Show all builds' });
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
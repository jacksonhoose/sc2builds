var jwt = require('express-jwt');

module.exports = function(app){

  // look for tokens on x-access-token header
  // if a token is present it will be deserialized
  // and attached to the req.user
  app.use(jwt({
    secret: 'tokenSecret',
    credentialsRequired: false,
    getToken: function fromHeaderOrQuerystring(req){
      if(req.headers['x-access-token']){
        return req.headers['x-access-token'];
      } 
      return null;
    }
  }));

};
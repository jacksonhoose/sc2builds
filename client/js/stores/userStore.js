var Reflux = require('reflux');
var actions = require('../actions');
var Router = require('react-router');
var request = require('superagent');

var userStore = Reflux.createStore({

  listenables: actions,

  init: function() {
    // bind to `this`
    // this.removeToken = this.removeToken.bind(this);
    // this.setToken = this.setToken.bind(this);
    // this.getToken = this.getToken.bind(this);

    // the token exists but there isn't a user in memory
    if(!!this.getToken() && !this.user){
      this.checkToken.call(this, this.getToken());
    }

    this.user = false;
  },

  checkToken: function(token){
    // there is a token but there is no user object
    // stored in memory so we want to confirm that
    // the token is still valid and get a fresh 
    // user object back
    request
      .post('/api/auth/validate')
      .set('x-access-token', token)
      .end(function(err, response){
        // there was a 200 response with a user object
        if(response.body && response.body.user){
          this.user = response.body.user;
        } else {
          // the user object was false
          // remove the token and force the user
          // to login manually
          this.user = false;
          this.removeToken();
        }
        this.trigger(this.user);
      }.bind(this));
  },

  getUser: function(){
    return this.user;
  },

  /* add / remove / get tokens */
  removeToken: function(){
    window.localStorage.removeItem('sctoken');
  },

  getToken: function(){
    return window.localStorage.getItem('sctoken');
  },

  setToken: function(token){
    window.localStorage.setItem('sctoken', token);
  },

  onUpdateProfile: function(profile){
    console.log(profile);
  },

  // log a user out
  // destroys user in memory and removes token
  logout: function(){
    this.user = false;
    this.removeToken();
    this.trigger(this.user);
  },

  onLogout: function(){
    this.logout.call(this);
  },

  // returns true/false if user object is in memory
  isLoggedIn: function(){
    return !!this.user;
  },

  onSignup: function(signupResponse){
    signupResponse.then(function(response){
      // there is a user object and a token in the response
      // the user has successfully authenticated
      if(response.user && response.token){
        // store the token in localStorage
        this.setToken(response.token);
        this.user = response.user;
        this.trigger(this.user);
      }
    }.bind(this));
  },

  onLogin: function(loginResponse){
    loginResponse.then(function(response){
      console.log(response);
      // there is a user object and a token in the response
      // the user has successfully authenticated
      if(response.user && response.token){
        // store the token in localStorage
        this.setToken(response.token);
        this.user = response.user;
        this.trigger(this.user);
      }
    }.bind(this));
  }
});

module.exports = userStore;
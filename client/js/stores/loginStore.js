var Reflux = require('reflux');
var actions = require('../actions');

var loginStore = Reflux.createStore({

  listenables: actions,

  init: function(){
    this.validation = '';
  },

  onLogin: function(response){
    response.then(function(user){
      this.trigger(this.validation);
    }.bind(this));
  }
 
});

module.exports = loginStore;
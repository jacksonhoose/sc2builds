var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Actions = require('../../actions');
var userStore = require('../../stores/userStore');

var Signup = React.createClass({

  mixins: [
    Reflux.listenTo(userStore, 'onSignup'),
    Router.Navigation
  ],
  
  signup: function(e){
    e.preventDefault();
    var username = this.refs.username.getDOMNode().value.trim();
    var password = this.refs.password.getDOMNode().value.trim();
    Actions.signup(username, password);
  },

  onSignup: function(){
    if(userStore.isLoggedIn()){
      this.transitionTo('dashboard');
    }
  },

  statics: {
    willTransitionTo: function(transition){
      if(userStore.isLoggedIn()){
        transition.redirect('dashboard');
      }
    }
  },
    
  render: function(){
    return (
      <div className="container">
        <div className="col-sm-12 sm-centered">
          <h2>Signup</h2>
          <div>
            <form onSubmit={this.signup} className="form" method="POST" action="/api/auth/signup">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" ref="username" className="form-control" name="username" id="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" ref="password" className="form-control" name="password" id="password" />
              </div>
              <button type="submit" className="btn btn-default">Signup</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Signup;
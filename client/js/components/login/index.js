var React = require('react');
var Reflux = require('reflux');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Actions = require('../../actions');
var loginStore = require('../../stores/loginStore');
var userStore = require('../../stores/userStore');

var Login = React.createClass({

  mixins: [
    Reflux.listenTo(loginStore, 'onLoginChange'),
    Router.Navigation
  ],

  statics: {
    willTransitionTo: function(transition){
      if(userStore.isLoggedIn()){
        transition.redirect('dashboard');
      }
    }
  },

  onLoginChange: function(){
    if(userStore.isLoggedIn()){
      this.transitionTo('dashboard');
    }
  },
  
  login: function(e){
    e.preventDefault();
    var username = this.refs.username.getDOMNode().value.trim();
    var password = this.refs.password.getDOMNode().value.trim();
    Actions.login(username, password);
  },

  render: function(){
    return (
      <div className="container">
        <div className="col-sm-12 sm-centered">
          <h2>Login</h2>
          <div>
            <form className="form" onSubmit={this.login} action="/api/auth/login" method="POST">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" ref="username" className="form-control" name="username" id="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" ref="password" className="form-control" name="password" id="password" />
              </div>
              <button type="submit" className="btn btn-default">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Login;
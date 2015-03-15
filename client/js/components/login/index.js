var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Login = React.createClass({
  render: function(){
    return (
      <div>
        <div>Login</div>
        <div>
          <form className="form" action="/api/auth/login" method="POST">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Login;
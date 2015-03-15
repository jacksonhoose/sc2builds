var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Signup = React.createClass({
  render: function(){
    return (
      <div>
        <div>Signup</div>
        <div>
          <form className="form" method="POST" action="/api/auth/signup">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Signup;
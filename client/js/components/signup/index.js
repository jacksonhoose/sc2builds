var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Signup = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="col-sm-12 sm-centered">
          <div>Signup</div>
          <div>
            <form className="form" method="POST" action="/api/auth/signup">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" name="username" id="username" />
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" id="password" />
              <button type="submit" className="btn btn-default">Signup</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Signup;
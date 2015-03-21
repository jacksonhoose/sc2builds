var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var LoggedOutNav = React.createClass({
  render: function(){
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="login">Login</Link></li>
        <li><Link to="signup">Signup</Link></li>
      </ul>
    );
  }
});

module.exports = LoggedOutNav;


var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var userStore = require('../../stores/userStore');
var Actions = require('../../actions');

var LoggedInNav = React.createClass({

  mixins: [
    Router.Navigation
  ],
  
  logout: function(e){
    e.preventDefault();
    Actions.logout();
    this.transitionTo('home');
  },

  render: function(){
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="dashboard">Dashboard</Link></li>
        <li><a href="#" onClick={this.logout}>Logout</a></li>
      </ul>
    );
  }
});

module.exports = LoggedInNav;


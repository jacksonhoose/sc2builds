var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Authentication = require('../../mixins/authentication');
var userStore = require('../../stores/userStore');
var Link = Router.Link;
var Tab = require('../_partials/bsTab');

var App = React.createClass({
  
  mixins: [
    Authentication
  ],

  render: function(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 sm-centered">
            <h2>Welcome back, {userStore.getUser().username}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <ul className="nav nav-pills nav-stacked">
              <Tab to="dashboard">Dashboard</Tab>
              <Tab to="updateProfile">Profile</Tab>
            </ul>
          </div>
          <div className="col-md-10">
            <RouteHandler />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var DashboardHome = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="col-md-12">
          Home
        </div>
      </div>
    );
  }
});

module.exports = DashboardHome;
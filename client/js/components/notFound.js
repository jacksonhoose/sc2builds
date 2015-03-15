var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var NotFound = React.createClass({
  render: function(){
    return (
      <div>Not Found</div>
    );
  }
});

module.exports = NotFound;
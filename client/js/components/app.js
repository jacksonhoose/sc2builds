var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

/* Components */
var Header = require('./_partials/header');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
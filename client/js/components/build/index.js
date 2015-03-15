var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Build = React.createClass({
  
  mixins: [Router.State],

  getInitialState: function(){
    return {
      build: this.getParams().buildId
    };
  },

  render: function(){
    return (
      <div>Build {this.state.build}</div>
    );
  }
});

module.exports = Build;
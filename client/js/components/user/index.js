var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var User = React.createClass({
  
  mixins: [Router.State],

  getInitialState: function(){
    return {
      user: this.getParams().userId
    };
  },

  render: function(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>User {this.state.user} Profile</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            
          </div>
        </div>
      </div>
    );
  }
});

module.exports = User;
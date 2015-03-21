var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var BuildStep = React.createClass({
  
  getInitialState: function(){
    return {
      supply: null,
    };
  },

  render: function(){
    return (
      <li key={this.props.key}>
        <div className="row">
          <div className="col-md-12">
            <h4>Step {this.props.stepNumber}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <span>{this.props.supply ? 'Supply: ' + this.props.supply : ''}</span>
          </div>
          <div className="col-md-9">
            <p>{this.props.children}</p>
          </div>
        </div>
      </li>
    );
  }
});

module.exports = BuildStep;
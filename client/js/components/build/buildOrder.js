var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var BuildStep = require('./buildStep');

var BuildOrder = React.createClass({
  
  getInitialState: function(){
    return {};
  },

  render: function(){
    var steps = this.props.steps.map(function(step, i){
      return <BuildStep stepNumber={i} key={i} supply={step.supply}>{step.text}</BuildStep>
    });

    return (
      <ol className="list-unstyled">
        {steps}
      </ol>
    );
  }
});

module.exports = BuildOrder;
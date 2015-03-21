var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var BuildOrder = require('./buildOrder');

var Build = React.createClass({
  
  mixins: [Router.State],

  getInitialState: function(){
    return {
      buildName: this.getParams().buildId,
      author: 'Hank',
      steps: [
        {
          supply: '14/14',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper mauris quis facilisis sodales. Donec sed facilisis augue. Integer non posuere lectus, facilisis faucibus odio. In vitae ipsum rhoncus, semper mauris eu, facilisis turpis. Morbi tristique commodo dignissim. Fusce libero ipsum, eleifend eget pellentesque at, pharetra nec nunc. Fusce auctor erat vel ultrices molestie. Nunc vitae dui ut odio posuere cursus. Sed ac sodales turpis, a egestas ante. Maecenas feugiat maximus arcu euismod finibus. Cras sit amet imperdiet lectus. Fusce convallis erat pellentesque maximus ornare. Donec ac lobortis ante, feugiat semper velit. Pellentesque eu mauris eu orci consectetur ultrices.'
        },
        {
          supply: '20/24',
          text: 'consectetur adipiscing elit. Vivamus ullamcorper mauris quis facilisis sodales. Donec sed facilisis augue. Integer non posuere lectus, facilisis faucibus odio. In vitae ipsum rhoncus, semper mauris eu, facilisis turpis. Morbi tristique commodo dignissim. Fusce libero ipsum, eleifend eget pellentesque at, pharetra nec nunc. Fusce auctor erat vel ultrices molestie. Nunc vitae dui ut odio posuere cursus. Sed ac sodales turpis, a egestas ante. Maecenas feugiat maximus arcu euismod finibus. Cras sit amet imperdiet lectus. Fusce convallis erat pellentesque maximus ornare. Donec ac lobortis ante, feugiat semper velit. Pellentesque eu mauris eu orci consectetur ultrices.'
        }
      ]
    };
  },

  addStep: function(){
    var steps = this.state.steps;
    
    steps.push({
      supply: '32/32'
    });

    this.setState({
      steps: steps,
      text: 'consectetur adipiscing elit. Vivamus ullamcorper mauris quis facilisis sodales. Donec sed facilisis augue. Integer non posuere lectus, facilisis faucibus odio. In vitae ipsum rhoncus, semper mauris eu, facilisis turpis. Morbi tristique commodo dignissim. Fusce libero ipsum, eleifend eget pellentesque at, pharetra nec nunc. Fusce auctor erat vel ultrices molestie. Nunc vitae dui ut odio posuere cursus. Sed ac sodales turpis, a egestas ante. Maecenas feugiat maximus arcu euismod finibus. Cras sit amet imperdiet lectus. Fusce convallis erat pellentesque maximus ornare. Donec ac lobortis ante, feugiat semper velit. Pellentesque eu mauris eu orci consectetur ultrices.'
    });
  },

  render: function(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Build {this.state.buildName}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <BuildOrder steps={this.state.steps} />
            <button className="btn btn-default" onClick={this.addStep}>Add Step</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Build;
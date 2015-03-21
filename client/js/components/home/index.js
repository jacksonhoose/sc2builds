var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Home = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <div className="md-12-col">
            <div className="jumbotron">
              <h1>Welcome to SC2Builds!</h1>
              <Link className="btn btn-primary btn-lg" to="signup">Signup</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h2>Top Rated Builds</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <span className="badge">14</span>
                Cras justo odio
              </li>
              <li className="list-group-item">
                <span className="badge">2</span>
                Dapibus ac facilisis in
              </li>
              <li className="list-group-item">
                <span className="badge">1</span>
                Morbi leo risus
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>Recently Added Builds</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <span className="badge">14</span>
                Cras justo odio
              </li>
              <li className="list-group-item">
                <span className="badge">2</span>
                Dapibus ac facilisis in
              </li>
              <li className="list-group-item">
                <span className="badge">1</span>
                Morbi leo risus
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>Most Commented Builds</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <span className="badge">14</span>
                Cras justo odio
              </li>
              <li className="list-group-item">
                <span className="badge">2</span>
                Dapibus ac facilisis in
              </li>
              <li className="list-group-item">
                <span className="badge">1</span>
                Morbi leo risus
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
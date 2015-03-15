var React = require('react');

/* Router */
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;

/* Components */
var App = require('./components/app');
var NotFound = require('./components/notFound');
var Home = require('./components/home');

/* Auth */
var Login = require('./components/login');
var Signup = require('./components/signup');

/* Builds */
var Build = require('./components/build');

var routes = (
  <Route name="sc2builds" path="/" handler={App}>
    <DefaultRoute name="index" handler={Home} />
    
    {/* Auth Routes */}
    <Route name="login" path="login" handler={Login} />
    <Route name="signup" path="signup" handler={Signup} />

    {/* Public Build Routes */}
    <Route name="build" path="build/:buildId" handler={Build} />

    <NotFoundRoute name="notFound" handler={NotFound} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler, state) {
  var params = state.params;
  React.render(<Handler params={params} />, document.getElementById('app-container'));
});

module.exports = routes;
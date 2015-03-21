var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var userStore = require('../../stores/userStore');

var LoggedOutNav = require('./loggedOutNav');
var LoggedInNav = require('./loggedInNav');

var Header = React.createClass({

  mixins: [
    Reflux.listenTo(userStore, 'onLogin'),
    Reflux.listenTo(userStore, 'onLogout')
  ],

  getInitialState: function(){
    return {
      loggedIn: userStore.getUser()
    };
  },

  onLogin: function(user){
    this.toggleNav.call(this);
  },

  toggleNav: function(){
    this.setState({
      loggedIn: userStore.isLoggedIn()
    });
  },

  onLogout: function(){
    this.toggleNav.call(this);
  },

  // componentDidMount: function(){
  //   this.dropDownMenu = document.querySelector('.dropdown-menu');
  // },

  // componentWillUnmount: function(){
  //   this.dropDownMenu = undefined;
  // },

  // toggleNav: function(e){
  //   e.preventDefault();
  //   this.dropDownMenu.style.display = this.dropDownMenu.style.display === 'block' ? 'none' : 'block';
  // },

  render: function(){
    var nav;

    if(this.state.loggedIn){
      nav = <LoggedInNav />;
    } else {
      nav = <LoggedOutNav />;
    }

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="home" className="navbar-brand">SC2Builds</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" role="button" aria-expanded="false">Browse Builds <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Terran</a></li>
                  <li><a href="#">Protoss</a></li>
                  <li><a href="#">Zerg</a></li>
                  <li className="divider"></li>
                  <li><a href="#">Top Rated</a></li>
                  <li><a href="#">Most Commented</a></li>
                  <li><a href="#">Recently Added Builds</a></li>
                </ul>
              </li>
            </ul>

            {nav}
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Header;


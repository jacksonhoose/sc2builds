var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var userStore = require('../../stores/userStore');
var Actions = require('../../actions');

var UpdateProfile = React.createClass({
  getInitialState: function(){
    return {
      user: userStore.getUser()
    }
  },

  submit: function(e){
    e.preventDefault();
  },

  save: function(e){
    e.preventDefault();
    var profile = this.refs.profile.getDOMNode().value.trim();
    Actions.updateProfile({
      profile: profile
    });
  },

  render: function(){
    return (
      <div className="row">
        <div className="col-md-12">
          <h2>Update Profile</h2>
          <form className="form" onSubmit={this.submit}>
            <div className="form-group">
              <label htmlFor="profile">Bio</label>
              <textarea ref="profile" id="profile" className="form-control" defaultValue={this.state.user.profile}>
              </textarea> 
            </div>
            <button className="btn btn-primary" type="submit" onClick={this.save}>Save</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = UpdateProfile;
/** @jsx React.DOM */
var React = require('react');
var UsersStore = require('../stores/UsersStore');

var Header = React.createClass({
  getInitialState: function() {
		return UsersStore.getUser();
	},
  componentDidMount: function() {
		UsersStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
    UsersStore.removeChangeListener(this._onChange);
  },
	_onChange: function() {
		this.setState(UsersStore.getUser());
    console.log("User State Change",this.state);
	},
  render: function() {
    return (
      <div className="header">
        <h3>Welcome, {this.state.user.firstName} {this.state.user.lastName}</h3>
      </div>
    );
  }
});

module.exports = Header;

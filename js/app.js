/** @jsx React.DOM */
var React = require('react');
var CommentsStore = require('./stores/CommentsStore');
var UsersStore = require('./stores/UsersStore');
var Main = require('./components/Main');
var CommentsAPI = require('./utils/CommentsAPI');
var UsersAPI = require("./utils/UsersAPI");

UsersAPI.get();
CommentsAPI.beginPolling();

React.render(
	<Main />,
	document.getElementById('content')
);

/** @jsx React.DOM */
var React = require('react');
var Header = require('./Header');
var CommentBox = require('./CommentBox');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main">
        <Header />
        <CommentBox />
      </div>
    );
  }
});

module.exports = Main;

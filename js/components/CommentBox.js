/** @jsx React.DOM */
var React = require('react');
var CommentList = require('./CommentList');
var CommentForm = require('./CommentForm');
var CommentsActions = require('../actions/CommentsActions');
var CommentsStore = require('../stores/CommentsStore');

var CommentBox = React.createClass({
	getInitialState: function() {
		return CommentsStore.getComments();
	},
	componentDidMount: function() {
		//console.log("Component Did Mount");
		CommentsStore.addChangeListener(this._onChange);
		CommentsActions.getComments();
	},
	componentWillUnmount: function() {
		//console.log("Component Will Unmount");
    CommentsStore.removeChangeListener(this._onChange);
  },
	_onChange: function() {
		//console.log("CommentBox._onChange fired.");
		this.setState(CommentsStore.getComments());
	},
	handleCommentSubmit: function(comment) {
		CommentsActions.addComment(comment);
	},
	render: function() {
		return (
			<div className="commentBox panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title">Comments&nbsp;<span className="badge bg-primary">{this.state.comments.length}</span></h3>
				</div>
				<div className="panel-body">
					<CommentList data={this.state.comments}/>
					<CommentForm onCommentSubmit={this.handleCommentSubmit}/>
				</div>
			</div>
		);
	}
});

module.exports = CommentBox;

/** @jsx React.DOM */
var React = require('react');
var UsersStore = require('../stores/UsersStore');

var CommentForm = React.createClass({
	getInitialState: function() {
		return {author: '', text: ''};
	},
	handleAuthorChange: function(e) {
		this.setState({author: e.target.value});
	},
	handleTextChange: function(e) {
		this.setState({text: e.target.value});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var text = this.state.text.trim();
		if(!text) {
			return;
		}
		this.props.onCommentSubmit({author: UsersStore.getUser().user, text: text});
		this.setState({text: ''});
	},
	render: function() {
		return (
			<div className="commentForm well">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="commentText">Comment:</label>
						<input id="commentText" type="text" className="form-control" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange} />
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
});

module.exports = CommentForm;

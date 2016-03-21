/** @jsx React.DOM */
var React = require('react');
var Like = require('./Like');

var Comment = React.createClass({
	rawMarkup: function() {
		// this.props.children because its a child value of this tag from its parent, not a property
		var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
		return { __html: rawMarkup };
	},
	render: function() {
		return (
			<div className="comment">
				<h4 className="commentAuthor">
					{this.props.author.firstName} {this.props.author.lastName}
				</h4>
				<span dangerouslySetInnerHTML={this.rawMarkup()} />
				<Like likedBy={this.props.likedBy} commentId={this.props.commentId} />
			</div>
		);
	}
});

module.exports = Comment;

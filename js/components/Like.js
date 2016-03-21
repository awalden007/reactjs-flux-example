/** @jsx React.DOM */
var React = require('react');
var LikedBy = require('./LikedBy');
var CommentsActions =  require('../actions/CommentsActions');
var UsersStore = require('../stores/UsersStore');

var Like = React.createClass({
  likeComment: function() {
    console.log(UsersStore.getUser());
    CommentsActions.likeComment(this.props.commentId, UsersStore.getUser().user.id);
  },
  render: function() {
    var buttonStyle = {
      padding: '0px 4px'
    };
    return (
      <div className="likeClass">
        <button type="button" className="btn btn-primary" style={buttonStyle} onClick={this.likeComment}>
          <span className="glyphicon glyphicon-thumbs-up"></span>
        </button>
        <LikedBy likedBy={this.props.likedBy} />
      </div>
    );
  }
});

module.exports = Like;

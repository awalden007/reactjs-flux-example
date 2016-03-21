/** @jsx React.DOM */
var React = require('react');

var LikedBy = React.createClass({
  getInitialState: function() {
    return {showLikedByUsers: false};
  },
  getLikedCount: function() {
    var html = this.props.likedBy.length;
    if(this.props.likedBy.length == 0) {
      html = "Be the first to like this!";
    }
    else if(this.props.likedBy.length == 1) {
      html += " person likes this!";
    }
    else {
      html += " people like this!";
    }
    return html;
  },
  getUserNodes: function() { // Not working, come back to understand why
    var output = [];
    for(var x = 0; x < this.props.likedBy; x++) {
      var user = this.props.likedBy[x];
      output.push(<span><a>{user.firstName} {user.lastName}</a></span>);
    }
    return output;
  },
  toggleLikedBy: function() {
    if(this.props.likedBy.length > 0) {
      this.setState({showLikedByUsers: !this.state.showLikedByUsers});
    }
  },
  render: function() {
    var paddingRightStyle = {
      paddingRight: '10px'
    };
    var userNodes = this.props.likedBy.map(function(user) {
			return (
				<span style={paddingRightStyle}>{user.firstName} {user.lastName}</span>
			);
		});
    var style = {
      paddingLeft: '10px'
    };
    return (
      <span className="likedBy" style={style}>
        <span onClick={this.toggleLikedBy}>{this.state.showLikedByUsers ? {userNodes} : this.getLikedCount()}</span>
      </span>
    );
  }
});

module.exports = LikedBy;

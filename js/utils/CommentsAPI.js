var CommentsServerActions = require('../actions/CommentsServerActions');
var CommentsConstants = require('../constants/CommentsConstants');

var CommentsAPI = {
  serverInterval: null,
  get: function() {
    $.ajax({
			url: 'http://localhost:8680/comments',
			dataType: 'json',
			cache: false,
			success: function(data) {
        CommentsServerActions.receiveComments(data);
			}.bind(this),
			error: function(xhr, status, err) {
				console.error('http://localhost:8680/comments', status, err.toString());
			}.bind(this)
		});
  },
  put: function(comment) {
		$.ajax({
			url: 'http://localhost:8680/comments',
			dataType: 'json',
			type: 'POST',
			contentType: "application/json",
			data: JSON.stringify(comment),
			success: function(data) {
        CommentsServerActions.receiveComments(data);
			}.bind(this),
			error: function(xhr, status, err) {
				console.error('http://localhost:8680/comments', status, err.toString());
			}.bind(this)
		});
	},
  like: function(commentId, userId) {
		$.ajax({
			url: 'http://localhost:8680/comments/likedBy/'+ commentId + "/" + userId,
			dataType: 'json',
			type: 'GET',
			contentType: "application/json",
			success: function(data) {
        CommentsServerActions.receiveComments(data);
			}.bind(this),
			error: function(xhr, status, err) {
				console.error('http://localhost:8680/comments', status, err.toString());
			}.bind(this)
		});
	},
  beginPolling: function() {
    if(this.serverInterval == null) {
      this.serverInterval = setInterval(function() {
        CommentsAPI.get();
      },5000);
    }
  },
  endPolling: function() {
    if(this.serverInterval != null) {
      clearInterval(this.serverInterval);
      this.serverInterval = null;
    }
  }
};

module.exports = CommentsAPI;

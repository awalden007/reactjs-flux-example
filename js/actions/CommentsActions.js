var AppDispatcher = require('../dispatcher/AppDispatcher');
var CommentsConstants = require('../constants/CommentsConstants');

var CommentsActions = {

  addComment: function(comment) {
    AppDispatcher.handleAction({
      actionType: CommentsConstants.ADD_COMMENT,
      comment: comment
    });
  },

  getComments: function() {
    AppDispatcher.handleAction({
      actionType: CommentsConstants.GET_COMMENTS
    });
  },

  likeComment: function(commentId, userId) {
    AppDispatcher.handleAction({
      actionType: CommentsConstants.LIKE_COMMENT,
      commentId: commentId,
      userId: userId
    });
  }

};

module.exports = CommentsActions;

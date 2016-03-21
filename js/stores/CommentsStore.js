var AppDispatcher = require('../dispatcher/AppDispatcher');
var CommentsConstants = require('../constants/CommentsConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CommentsAPI = require('../utils/CommentsAPI');

var CHANGE_EVENT = 'change';

var _commentsStore = {
  comments: []
};

var CommentsStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getComments: function() {
    return _commentsStore;
  }
});

CommentsStore.dispatcherIndex = AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case CommentsConstants.ADD_COMMENT:
      console.log("Add Comment Requested", payload);
      CommentsAPI.put(action.comment);
      break;
    case CommentsConstants.LIKE_COMMENT:
      console.log("Like a comment", payload);
      CommentsAPI.like(action.commentId, action.userId);
      break;
    case CommentsConstants.GET_COMMENTS:
      console.log("Requesting comments from server");
      CommentsAPI.get();
      break;
    case CommentsConstants.GET_COMMENTS_RESPONSE:
      console.log("Getting a server response", payload);
      _commentsStore.comments = action.response.comments;
      break;
    default:
      break;
  }

  CommentsStore.emitChange();
  return true;
});

module.exports = CommentsStore;

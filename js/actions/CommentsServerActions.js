var AppDispatcher = require('../dispatcher/AppDispatcher');
var CommentsConstants = require('../constants/CommentsConstants');

var CommentsServerActions = {

  receiveComments: function(response) {
    AppDispatcher.handleAction({
      actionType: CommentsConstants.GET_COMMENTS_RESPONSE,
      response: response
    });
  }

};

module.exports = CommentsServerActions;

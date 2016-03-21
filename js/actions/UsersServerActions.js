var AppDispatcher = require('../dispatcher/AppDispatcher');
var UsersConstants = require('../constants/UsersConstants');

var UsersServerActions = {

  receiveUsers: function(response) {
    AppDispatcher.handleUserAction({
      actionType: UsersConstants.GET_USERS_RESPONSE,
      response: response
    });
  }

};

module.exports = UsersServerActions;

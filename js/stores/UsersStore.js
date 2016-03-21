var AppDispatcher = require('../dispatcher/AppDispatcher');
var UsersConstants = require('../constants/UsersConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _usersStore = {
  user: {}
};

var UsersStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getUser: function() {
    return _usersStore;
  }
});

UsersStore.dispatcherIndex = AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case UsersConstants.GET_USERS_RESPONSE:
      console.log("User Info Received", payload);
      _usersStore.user = action.response;
      break;
    default:
      break;
  }

  UsersStore.emitChange();
  return true;
});

module.exports = UsersStore;

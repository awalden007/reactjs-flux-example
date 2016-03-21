var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {
  handleAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  },
  handleUserAction: function(action) {
    this.dispatch({
      source: 'USER_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;

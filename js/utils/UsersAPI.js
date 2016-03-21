var UsersServerActions = require('../actions/UsersServerActions');

var UsersAPI = {
  get: function() {
    $.ajax({
			url: 'http://localhost:8680/users',
			dataType: 'json',
			cache: false,
			success: function(data) {
        UsersServerActions.receiveUsers(data);
			}.bind(this),
			error: function(xhr, status, err) {
				console.error('http://localhost:8680/users', status, err.toString());
			}.bind(this)
		});
  }
};

module.exports = UsersAPI;

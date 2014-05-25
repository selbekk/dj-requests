var webController = require('./web/controller.js');

module.exports = {
	route: function(server) {
		server.get('/', webController.show);
	}
};


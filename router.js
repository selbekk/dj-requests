var webController = require('./web/controller.js');

module.exports = function(server) {
	server.get('/', webController.show);
};

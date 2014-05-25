var webController = require('./web/controller.js');


module.exports = {
	route: function(app) {
		app.get('/', webController.frontPage);
	}
};


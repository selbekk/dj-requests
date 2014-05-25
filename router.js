var webController = require('./web/controller.js');


module.exports = {
	route: function(app) {
		app.get('/', webController.app);
        app.get('/login', webController.loginPage);
        app.post('/login', webController.login);

        app.get('/api', webController.apiLandingPage);

	}
};


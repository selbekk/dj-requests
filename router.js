var webController = require('./web/controller.js');


module.exports = {
	route: function(app) {
		app.get('/', webController.app);
        app.get('/register', webController.registerPage);
        app.post('/register', webController.register);
        app.get('/login', webController.loginPage);
        app.post('/login', webController.login);

        app.get('/api', webController.apiLandingPage);

	}
};


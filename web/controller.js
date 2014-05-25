var Logger = require('basic-logger');
var log = new Logger();
var userResource = require('../user/resource');

module.exports = {
    app: function(req, res) {
        // TODO: Check if logged in
		res.render('app', { title: 'dj requests alpha version' } );
	},

    apiLandingPage: function(req, res) {
        res.render('api-info');
    },

    registerPage: function(req, res) {
        res.render('register');
    },

    register: function(req, res) {
        var username = req.body.username;
        var password = req.body.password;

        userResource.register(username, password);

        res.send(200);
    },

    loginPage: function(req, res) {
        res.render('login');
    },

    login: function(req, res) {
        res.send(200);
    }
}

var Logger = require('basic-logger');
var log = new Logger();

module.exports = {
    app: function(req, res) {
        // TODO: Check if logged in
		res.render('app', { title: 'dj requests alpha version' } );
	},

    apiLandingPage: function(req, res) {
        res.render('api-info');
    },

    loginPage: function(req, res) {

    },

    login: function(req, res) {

    }
}

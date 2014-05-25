var Logger = require('basic-logger');
var log = new Logger();

module.exports = {
	frontPage: function(req, res) {
		log.debug('showing webapp front page');
		res.render('index', {title: 'dj requests alpha version'});
	}
}

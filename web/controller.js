var Logger = require('basic-logger');
var log = new Logger();

module.exports = {
	show: function(req, res) {
		log.info('showing webapp front page');
		res.send(200);
	}
}

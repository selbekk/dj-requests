var express = require('express');
var app = express();

var config = require('./config.js');
var router = require('./router.js');

config.setup(app);
router.route(app);

var server = app.listen(3000, function() {
	console.log('Music requests server running at port 3000');
});


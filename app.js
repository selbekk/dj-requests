var express = require('express');
var app = express();

var router = require('./router.js');

// Let's route up the app
router(app);

var server = app.listen(3000, function() {
	console.log('Music requests server running at port 3000');
});


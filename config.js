var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var Logger = require('basic-logger');

module.exports = {
	setup: function(app) {
		Logger.setLevel('trace');

		app.use(bodyParser());
		app.use(express.static(path.join(__dirname, 'public')));
	}
};



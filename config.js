var express = require('express');
var path = require('path');
var Logger = require('basic-logger');

module.exports = {
        setup: function(app) {
                setup(app);
                setupErrorHandling(app);
        }
};

var setupErrorHandling = function(app) {
	/// catch 404 and forwarding to error handler
	app.use(function(req, res, next) {
    		var err = new Error('Not Found');
    		err.status = 404;
    		next(err);
	});
};

var setup = function(app) {
	Logger.setLevel('trace');

        app.use(express.static(path.join(__dirname, 'public')));
};


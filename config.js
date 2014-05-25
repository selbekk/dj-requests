var express = require('express');
var handlebars = require('handlebars');
var cons = require('consolidate');

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

	// development error handler
	// will print stacktrace
	if (app.get('env') === 'development') {
		app.use(function(err, req, res, next) {
			res.status(err.status || 500);
			res.render('error', {
				message: err.message,
				error: err
			}); 
		});
	}

	// production error handler
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: {}
		});
	});
};

var setup = function(app) {
	app.set('port', process.env.PORT || 3000);
	app.set('views', './web/views');

	app.engine('hbs', cons.handlebars);

	app.set('view engine', 'hbs');

	app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev'));
};


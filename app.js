/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes/index');
var ajax = require('./routes/ajax');
var http = require('http');
var path = require('path');
var partials = require('express-partials'); 

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(partials());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


routes(app);
ajax(app);
// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}


http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

routes(app);
var pool = require('./model/db').pool;
pool.getConnection(
	function(err, conn) {
		conn.query('SELECT 1 + 1 AS solution', 
			function(err, rows, fields) {
				if (err) throw err;
				console.log('The solution is: ', rows[0].solution);
			}
		);
	}
);
		/*
//mysql begin
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'hahazhu',
  password : 'yuefanju.1',
  database : 'yuefanju'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();
//mysql end


*/


		http.createServer(app).listen(app.get('port'), function() {
			console.log('Express server listening on port ' + app.get('port'));
		});
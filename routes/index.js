/*
 * GET home page.
 */
module.exports = function(app) {
	app.post('/post', function(req, res) {
		res.redirect('/searchRst/' + req.body.searchText);
	});
	app.get('/', function(req, res) {
		res.render('index', {
			title : 'Express'
		})
	});
	app.get('/searchRst/:searchText', function(req, res) {
		var pool = require('../model/db').pool;
		pool.getConnection(function(err, conn) {
			conn.query('select t.host,t.db,t.user from mysql.db t', function(
					err, rows, fields) {
				if (err)
					throw err;
				console.log('The first host is: ', rows[0].host);
				console.log('The length is: ', rows.length);
				res.render('searchRst', {
					searchWord : req.params.searchText,
					rstLength : rows.length,
					rowRst : rows
				})
			});
		});
	});
	app.get('/newEvent', function(req, res) {
		res.render('newEvent')
	})
}
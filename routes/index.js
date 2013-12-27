/*
 * GET home page.
 */
module.exports = function(app) {
	app.post('/searchRst', function(req, res) {
		console.log('The length is: ', req.body.searchText);
		res.redirect('/searchRst/' + req.body.searchText);
	});
	app.get('/', function(req, res) {
		res.render('index', {
			title : 'Express',
			layout: 'template'
		})
	});
	app.get('/searchRst/', function(req, res) {
		var pool = require('../model/db').pool;
		pool.getConnection(function(err, conn) {
			conn.query('select t.event_name,t.event_creator,t.event_crtime,t.event_comment from dat_event_info t order by t.event_crtime desc', function(
					err, rows, fields) {
				if (err)
					throw err;
				console.log('The length1 is: ', rows.length);
				res.render('searchRst', {
					searchWord : req.params.searchText,
					rstLength : rows.length,
					rowRst : rows,
					layout: 'template'
				})
			});
		});
	});
	app.get('/searchRst/:searchText', function(req, res) {
		var pool = require('../model/db').pool;
		var values = ['%'+req.params.searchText+'%','%'+req.params.searchText+'%','%'+req.params.searchText+'%']
		pool.getConnection(function(err, conn) {
			conn.query('select t.event_name,t.event_creator,t.event_crtime,t.event_comment from dat_event_info t where t.event_name like ? or t.event_creator like ? or t.event_comment like ?',values, function(
					err, rows, fields) {
				if (err)
					throw err;
				console.log('The length is: ', rows.length);
				res.render('searchRst', {
					searchWord : req.params.searchText,
					rstLength : rows.length,
					rowRst : rows,
					layout: 'template'
				})
			});
		});
	});
	app.get('/newEvent', function(req, res) {
		res.render('newEvent')
	})
}
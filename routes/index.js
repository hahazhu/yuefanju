/*
 * GET home page.
 */
//未输入搜索内容
var search_none ='select t.event_name,t.event_creator,t.event_crtime,t.event_comment '+
				'from dat_event_info t order by t.event_crtime desc';
//输入搜索内容，但是未选择类别
var search_all ='select t.event_name,t.event_creator,t.event_crtime,t.event_comment  '+
				'from dat_event_info t where t.event_name REGEXP ? or t.event_creator REGEXP ? or t.event_comment REGEXP ?'+
				'order by t.event_crtime desc';
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
			conn.query(search_none, function(
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
		
        var r = /\s+/g;
        var searchTextR= req.params.searchText.replace(r, '|');
        
		var values = [''+searchTextR+'',''+searchTextR+'',''+searchTextR+'']
		pool.getConnection(function(err, conn) {
			conn.query(search_all,values, function(
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
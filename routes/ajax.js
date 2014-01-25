/*
 * For Ajax.
 */

module.exports = function(app) {
	app.post('/ajaxQ', function(req, res) {
		var pool = require('../model/db').pool;
		console.log(req.body.querySql);
		var querySql = req.body.querySql;
		var values = [''];
		pool.getConnection(function(err, conn) {
			conn.query(querySql,values, function(
					err, rows, fields) {
				if (err)
					throw err;
				conn.release();
				var queryObj = {"rowRst": rows,"rstLength":rows.length};
				res.send(queryObj);
			});
		});
	});
}
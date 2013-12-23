/*
 * GET home page.
 */
module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index', {
			title: 'Express'
		})
	});
	app.get('/searchRst', function(req, res) {
		res.render('searchRst', {
			title: 'Express'
		})
	});
}
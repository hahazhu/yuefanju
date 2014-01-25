/*
 * For Ajax.
 */

module.exports = function(app) {
	app.post('/enterMain', function(req, res) {
		console.log(req.body.eventId);
		res.redirect('/eventForGuest/' + req.body.eventId);
	});
}
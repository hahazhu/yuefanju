/*
 * For Ajax.
 */
var insertPart = 'insert into dat_event_participant(event_id,event_participant_id,event_participant_name) values(?,?,?)';
module.exports = function(app) {
	app.post('/enterMain', function(req, res) {
		var eventId = req.body.eventId;
		var newPartName=req.body.newPartName;
		console.log(req.body.eventId);
		var values = [''+eventId+'',''+newPartName+'',''+newPartName+'']
		if(newPartName!=''){
			var pool = require('../model/db').pool;
			pool.getConnection(function(err, conn) {
				conn.query(insertPart,values, function(
						err, rows, fields) {
					if (err)
						throw err;
//				console.log('The length1 is: ', rows.length);
					conn.release();
				});
			});
		}
		res.redirect('/eventForGuest/' + req.body.eventId);
	});
}
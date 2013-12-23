var mysql      = require('mysql');
var pool = mysql.createPool({
  host     : '127.0.0.1',
  user     : 'hahazhu',
  password : 'yuefanju.1',
  database : 'yuefanju'
});
exports.pool = pool;
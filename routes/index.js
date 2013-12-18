
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.searchRst = function(req, res){
	  res.render('searchRst', { title: 'Express' });
	};
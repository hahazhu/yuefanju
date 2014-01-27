/*
 * GET home page.
 */
//未输入搜索内容
var search_none ='select t.event_id,t.event_name,t.event_creator,t.event_ispwd,t.event_password, date_format(t.event_crtime,\'%Y年%m月%d日\') as event_crtime ,t.event_comment '+
				'from dat_event_info t order by t.event_crtime desc';
//输入搜索内容，但是未选择类别
var search_all ='select t.event_id,t.event_name,t.event_creator,t.event_ispwd,t.event_password, date_format(t.event_crtime,\'%Y年%m月%d日\') as event_crtime,t.event_comment  '+
				'from dat_event_info t where t.event_name REGEXP ? or t.event_creator REGEXP ? or t.event_comment REGEXP ?'+
				'order by t.event_crtime desc';
var insertEvent = 'insert into dat_event_info(event_name,event_ispwd,event_password,event_crtime,event_comment) values (?,?,?,now(),?) ';
var selectEventDate = 'SELECT when_seq,when_describe FROM yuefanju.event_when_option where event_id = ? ';
var selectEVentInfo = 'SELECT event_name,event_comment FROM yuefanju.dat_event_info where event_id = ?'
//输入搜索内容，仅仅是活动名称
var search_name ='select t.event_id,t.event_name,t.event_creator,t.event_ispwd,t.event_password,date_format(t.event_crtime,\'%Y年%m月%d日\') as event_crtime,t.event_comment  '+
				'from dat_event_info t where t.event_name REGEXP ?'+
				'order by t.event_crtime desc';
//输入搜索内容，仅仅是活动创建者
var search_creator ='select t.event_id,t.event_name,t.event_creator,t.event_ispwd,t.event_password,date_format(t.event_crtime,\'%Y年%m月%d日\') as event_crtime,t.event_comment  '+
				'from dat_event_info t where t.event_creator REGEXP ?'+
				'order by t.event_crtime desc';
//输入搜索内容，仅仅是活动简介
var search_comment ='select t.event_id,t.event_name,t.event_creator,t.event_ispwd,t.event_password,date_format(t.event_crtime,\'%Y年%m月%d日\') as event_crtime,t.event_comment  '+
				'from dat_event_info t where t.event_comment REGEXP ?'+
				'order by t.event_crtime desc';
module.exports = function(app) {
	app.post('/searchRst', function(req, res) {
		res.redirect('/searchRst/all/' + req.body.searchText);
	});
	app.get('/', function(req, res) {
		res.render('index', {
			title : 'Express',
			layout: 'template'
		})
	});
	app.get('/searchRst/all', function(req, res) {
		var pool = require('../model/db').pool;
		pool.getConnection(function(err, conn) {
			conn.query(search_none, function(
					err, rows, fields) {
				if (err)
					throw err;
//				console.log('The length1 is: ', rows.length);
				conn.release();
				res.render('searchRst', {
					searchWord : '',
					searchType :'all',
					rstLength : rows.length,
					rowRst : rows,
					layout: 'template'
				})
			});
		});
	});
	app.get('/searchRst/all/:searchText', function(req, res) {
		var pool = require('../model/db').pool;
		
        var r = /\s+/g;
        var searchTextR= req.params.searchText.replace(r, '|');
        
		var values = [''+searchTextR+'',''+searchTextR+'',''+searchTextR+'']
		pool.getConnection(function(err, conn) {
			conn.query(search_all,values, function(
					err, rows, fields) {
				if (err)
					throw err;
				conn.release();
				res.render('searchRst', {
					searchWord : req.params.searchText,
					rstLength : rows.length,
					searchType: 'all',
					rowRst : rows,
					layout: 'template'
				})
			});
		});
	});
	app.get('/searchRst/name/:searchText', function(req, res) {
		var pool = require('../model/db').pool;
		
        var r = /\s+/g;
        var searchTextR= req.params.searchText.replace(r, '|');
        
		var values = [''+searchTextR+'']
		pool.getConnection(function(err, conn) {
			conn.query(search_name,values, function(
					err, rows, fields) {
				if (err)
					throw err;
				conn.release();
				res.render('searchRst', {
					searchWord : req.params.searchText,
					rstLength : rows.length,
					searchType: 'name',
					rowRst : rows,
					layout: 'template'
				})
			});
		});
	});
	app.get('/searchRst/creator/:searchText', function(req, res) {
		var pool = require('../model/db').pool;
		
        var r = /\s+/g;
        var searchTextR= req.params.searchText.replace(r, '|');
        
		var values = [''+searchTextR+'']
		pool.getConnection(function(err, conn) {
			conn.query(search_creator,values, function(
					err, rows, fields) {
				if (err)
					throw err;
				conn.release();
				res.render('searchRst', {
					searchWord : req.params.searchText,
					rstLength : rows.length,
					searchType: 'creator',
					rowRst : rows,
					layout: 'template'
				})
			});
		});
	});
	app.get('/searchRst/comment/:searchText', function(req, res) {
		var pool = require('../model/db').pool;
		
        var r = /\s+/g;
        var searchTextR= req.params.searchText.replace(r, '|');
        
		var values = [''+searchTextR+'']
		pool.getConnection(function(err, conn) {
			conn.query(search_comment,values, function(
					err, rows, fields) {
				if (err)
					throw err;
				conn.release();
				res.render('searchRst', {
					searchWord : req.params.searchText,
					rstLength : rows.length,
					searchType: 'comment',
					rowRst : rows,
					layout: 'template'
				})
			});
		});
	});
	app.get('/newEvent', function(req, res) {
		res.render('newEvent');
	});
	app.get('/eventForGuest/:event_id',function(req,res){
		var pool = require('../model/db').pool;
		var event_id = req.params.event_id;
		pool.getConnection(function(err,conn){
			conn.query(selectEventDate,event_id,function(err,rows,fields){
				if(err)
					throw err;
				conn.query(selectEVentInfo,event_id,function(err,rows2,fields){
					if(err)
						throw err;
					res.render('eventForGuest',{
						rowRst:rows,
						name : rows2[0].event_name,
						comment : rows2[0].event_comment,
						event_id:event_id
					})
				});
				
			})
		});

	});
	app.post('/submitEventDate', function(req, res ) {
		var pool = require('../model/db').pool;
		var id = req.body.event_id;
		var date = '1;2;3;4';
		var part = '';
		var dateArr = date.split(";");
		var paramArr = [];
		for(var i=0;i<dateArr.length;i++){
			paramArr.push([id,part,dateArr[i]]);
		}
		console.log(paramArr);
		pool.getConnection(function(err,conn){

			conn.query('insert into dat_event_part_choswhen(event_id,event_participant_id,event_when_select) values ? ',[paramArr],function(err,result){
				if(err)
					throw err;
				res.render('submitSuccess',{
				});
			})
		});
	});
	app.post('/newEvent', function(req, res) {
		var pool = require('../model/db').pool;
		var params = { event_name:req.body.eventName,event_crtime:'now()',event_comment:req.body.content};
		var dateListStr = req.body.dateListStr;
		var isPwd=0;
		console.log('*'+req.body.password2+"*");
		if(req.body.password2!=''){
			isPwd=1;
		}
		pool.getConnection(function(err,conn){


		//事务控制 批量插入event信息和日期信息
		conn.beginTransaction(function(err) {
		  	if (err) {
		   		throw err; 
			}
		  	conn.query(insertEvent, [req.body.eventName,isPwd,req.body.password2,req.body.content], function(err, result) {
			    if (err) { 
			      conn.rollback(function() {
			        throw err;
			      });
			      throw err;
			    }
			    console.log('result = '+result);
				var id = result.insertId;
				var dateArr = dateListStr.split(";");
				var paramArrRow = [];
				var paramArrAll = [];
				for(var i=0;i<dateArr.length;i++){
					paramArrAll.push([id,dateArr[i]]);
				}
				console.log(paramArrAll);

				var sql = "insert into event_when_option(event_id ,when_describe) values ?";

				conn.query(sql, [paramArrAll], function(err,result) {
			      if (err) { 
			        conn.rollback(function() {
			          throw err;
			        });
			      }  
			    conn.commit(function(err) {
			        if (err) { 
			          conn.rollback(function() {
			            throw err;
			          });
			        }
			        conn.release();
					res.render('eventAddr',{
						id:id
					});

			        console.log('success!');
			    });
    	});
  	});
});


//end




			// conn.query(insertEvent,params,function(err,result){
			// 	if(err){
			// 		throw err;
			// 	}
			// 	conn.release();
			// 	res.render('index',{
			// 		title:'express',
			// 		layout: 'template'
			// 	});

			// });
		})
	});
}
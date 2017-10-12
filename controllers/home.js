var bookshelf = require('../config/bookshelf');
var User = require('../models/User');
/**
 * GET /
 */
exports.index = function(req, res) {
 	User.fetchAll(/*{columns: ['id','name']}*/).then(function(tab) {
		console.log(tab);
		res.render('test', {
    	title: 'Home',
			//test : tab
			test: Array.from(tab)
		});
	});
};


exports.mysql = function(req, res) {
	 User.fetchAll(/*{columns: ['id','name']}*/).then(function(tab) {
		  res.send(tab);
	  });
};

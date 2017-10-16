var bookshelf = require('../config/bookshelf');
var User = require('../models/User');
var Product = require('../models/Product');
/**
 * GET /
 */
exports.index = function(req, res) {
 	Product.fetchAll().then(function(tab) {
		res.render('home', {
    	title: 'Home',
			test : tab.models
		});
	});
};


exports.mysql = function(req, res) {
	 User.fetchAll(/*{columns: ['id','name']}*/).then(function(tab) {
		  res.send(tab);
	  });
};

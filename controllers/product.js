var bookshelf = require('../config/bookshelf');
var User = require('../models/User');
var Product = require('../models/Product');
/**
 * GET /
 */
exports.filterName =  function(req, res) {
 	Product.fetchAll().then(function(tab) {
		res.render('home', {
    	title: 'Home',
			test : tab.models
		});
	});
};

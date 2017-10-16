var bookshelf = require('../config/bookshelf');
var User = require('../models/User');
var Product = require('../models/Product');
/**
 * GET /
 */
exports.filterName =  function(req, res) {
 	Product.forge().orderBy('name','DESC').fetchAll().then(function(tab) {
		res.render('home', {
    	title: 'Home',
			test : tab.models
		});
	});
};

exports.filterPrice =  function(req, res) {
 Product.forge().orderBy('price','DESC').fetchAll().then(function(tab) {
   res.render('home', {
     title: 'Home',
     test : tab.models
   });
 });
};

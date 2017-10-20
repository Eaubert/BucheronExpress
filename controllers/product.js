var bookshelf = require('../config/bookshelf');
var User = require('../models/User');
var Product = require('../models/Product');
/**
 * GET /
 */
exports.filterName =  function(req, res) {
 	Product.forge().orderBy('name','asc').fetchAll().then(function(tab) {
		res.render('home', {
    	title: 'Home',
			tabuser : tab.models
		});
	});
};

exports.filterPrice =  function(req, res) {
 Product.forge().fetchAll().then(function(tab) {
   res.render('home', {
     title: 'Home',
     tabuser : tab.models
   });
 });
};

exports.categorize =  function(req, res) {
 Product.forge().query(function (qb) {

   if(req.param("brand")){
     qb.where('product.brand', '=', req.param("brand"));
   }

   if(req.param("size")){
     qb.where('product.size', '=', req.param("size"));
   }

   if(req.param("price")){
     qb.whereBetween('product.price', [(parseInt(req.param("price"), 10)), (parseInt(req.param("price"), 10)+50)]);
   }

  if(req.param("gender")){
       qb.where('product.gender', '=', req.param("gender"));
  }

  if(req.param("order")){
     qb.orderBy(req.param("order"),'asc')
  }

 }).fetchAll().then(function(tab) {
   res.render('home', {
     title: 'Home',
     tabuser : tab.models
   });
 });
};

exports.search =  function(req, res) {

 Product.forge().query(function (qb) {

    var search =  "%"+ req.body.search.toUpperCase() + "%";
     qb.where('product.name', 'LIKE', search).orWhere('product.brand', 'LIKE', search);

 }).fetchAll().then(function(tab) {
   res.render('home', {
     title: 'Home',
     tabuser : tab.models
   });
 });
};

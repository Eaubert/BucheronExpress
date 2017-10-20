var bookshelf = require('../config/bookshelf');
var User = require('../models/User');
var Product = require('../models/Product');
var Panier = require('../models/panier');
var url = require ('url')
/**
 * GET /
 */
exports.index = function(req, res) {
 	Product.fetchAll().then(function(tab) {
		res.render('home', {
    	title: 'Home',
			tabuser : tab.models
		});
	});
};

exports.art = function(req, res) {
  Panier.fetchAll().then(function(tab) {
    var bool= false
    var m
    for(var i=0;i<tab.length;i++){
     if(req.param('id')==tab.models[i].id){
       bool =true
       m=tab.models[i].attributes.quantity
      }
    }
    if(bool==true){
      var res = m+1
     Panier.forge().where({id :req.param('id')}).save({quantity : res},{method:"update"});
    }
    else{
      Product.where('id','=',req.param('id')).query().select().then(function(t) {
       new Panier ({id : t[0].id,name : t[0].name, brand : t[0].brand, size : t[0].size, color: t[0].color, price :t[0].price, gender : t[0].gender,desc : t[0].desc, location : t[0].location, img : t[0].img, quantity : 1}).save(null,{method:'insert'});
     });
   }
  });

  Product.fetchAll().then(function(tab) {
    res.render('home', {
      title: 'Home',
      tabuser : tab.models
    });
  });
};

exports.panier =function(req, res){
  Panier.fetchAll().then(function(pan) {
    var total=0
    var btn='/'
    for(var x=0;x<pan.length;x++){
      total+=(pan.models[x].attributes.price*pan.models[x].attributes.quantity)
    }
    if(total>0){
      btn="/paiement"
    }
  res.render('panier', {
    title: 'basket',
    tabpanier : pan.models,
    total : total,
    btn : btn
  });
  });
}

exports.supp =function(req, res){

  Panier.forge().where({id :req.param('id')}).destroy()

  Panier.fetchAll().then(function(pan) {
    var total=0
    var btn='/'
    for(var x=0;x<pan.length;x++){
      total+=(pan.models[x].attributes.price*pan.models[x].attributes.quantity)
    }
    if(total>0){
      btn="/paiement"
    }
  res.render('panier', {
    title: 'basket',
    tabpanier : pan.models,
    total : total,
    btn : btn
  });
  });
}

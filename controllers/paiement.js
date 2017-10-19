var bookshelf = require('../config/bookshelf');
var Panier = require('../models/panier');

exports.paiement = function(req, res) {
 		res.render('paiement', {
     	title: 'Paiement'
 		});
 };

 exports.fin = function(req, res) {
   if (req.user){
     return res.redirect('/success');
   }
   else{
     return res.redirect('/login');
     res.render('account/login',{
       title: 'Log in'
   });
  };
};

  exports.success = function(req, res) {
    Panier.fetchAll().then(function(pan) {
      for(var i=0;i<pan.length;i++){
        Panier.forge().where({id : pan.models[i].attributes.id}).destroy()
      }
      res.render('success',{
        title: 'Success'
      });
    });
   };

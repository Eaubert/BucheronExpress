var bookshelf = require('../config/bookshelf');
var Panier = require('../models/panier');

exports.paiement = function(req, res) {
 		res.render('paiement', {
     	title: 'Paiement'
 		});
 };

 exports.test=function(req, res){
   if (req.user){
     return res.redirect('/paiement');
   }
   else{
     return res.redirect('/login');
     res.render('account/login',{
       title: 'Log in'
   });
  }
 }


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

   exports.delete =  function(req, res) {

         console.log(req.param());
         //Product.forge().where({id : req.param('id')).destroy();

       Product.fetchAll().then(function(tab) {
         res.render('home', {
           title: 'Home',
           tabuser : tab.models
         });
       });
   };

   exports.addProduct = function(req, res) {

     res.render('addProduct', {
       	title: 'AddProduct'
   		});
   };

   exports.valideProduct = function(req,res){
     if(req.img){
       var tempPath = req.img,
            targetPath = path.resolve('.public/image.png');
        if (path.extname(req.files.file.name).toLowerCase() === '.png') {
            fs.rename(tempPath, targetPath, function(err) {
                if (err) throw err;
                console.log("Upload completed!");
            });
        } else {
            fs.unlink(tempPath, function () {
                if (err) throw err;
                console.error("Only .png files are allowed!");
            });
        }
      }
      res.render('addProduct', {
         title: 'AddProduct'
       });
   }

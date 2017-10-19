var bookshelf = require('../config/bookshelf');

exports.paiement = function(req, res) {
 		res.render('paiement', {
     	title: 'Paiement'
 		});
 };

var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var Product = require('../models/Product');

/**
 * GET /
 */
exports.index = function(req, res) {
	
  
   console.log(Product);
  res.render('product', {
    title: 'Product'
  });
};


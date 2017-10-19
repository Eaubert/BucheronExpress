var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var bookshelf = require('../config/bookshelf');

var panier = bookshelf.Model.extend({
  tableName: 'panier',
  hasTimestamps: true,




});

module.exports = panier;

var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var bookshelf = require('../config/bookshelf');

var Product = bookshelf.Model.extend({
  tableName: 'product',
  hasTimestamps: true,

  initialize: function() {
    this.on('saving', this);
  }


});

module.exports = Product;
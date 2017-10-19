
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('panier', function(table) {
      table.decimal('id',10,0);
      table.string('name');
      table.string('brand');
      table.decimal('size',4,2);
      table.string('color');
      table.decimal('price',6,2);
      table.string('gender');
      table.string('desc');
      table.string('location');
      table.string('img');
      table.decimal('quantity',4,0);
      table.timestamps();
    })

  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('product')
  ]);
};

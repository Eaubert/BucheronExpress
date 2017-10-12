
exports.up = function(knex, Promise) {
	
   return Promise.all([
	knex.schema.createTableIfNotExists('product', function(table) {
      table.increments();
      table.string('name');
      table.decimal('size',4,2);
      table.string('color');
      table.decimal('price',6,2);
      table.string('gender');
      table.string('desc');
      table.string('location');
      table.string('img');
      table.timestamps();
    }).then(function () {
                return knex("product").insert([
                    {name: "geox", desc: "oui ca respire", img: "shoes1.PNG"},
                    {name: "nike", desc: "coupe avec classe", img: "shoes2.PNG"},
                    {name: "bushoesron", desc: "CCC"},
                    {name: "woodshoes", desc: "DDDD"}
                ]);
	}),
	
  ]);
};

exports.down = function(knex, Promise) {
  
	return Promise.all([
		knex.schema.dropTable('product')
	]);
};


exports.up = function(knex, Promise) {

   return Promise.all([
	knex.schema.createTable('product', function(table) {
      table.increments();
      table.string('name');
      table.string('brand');
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
                    {brand: "nike", name: "AirWoody", desc: "No it's not woody from toy story", size : 47, color : "black", price : 42, gender : "woman", location : "Alaska", img : "shoe1.PNG"},
                    {brand: "nike", name: "Nik-on", desc: "take a selfie with the tree", size : 43, color : "orange", price : 89, gender : "male", location : "Alpes", img : "shoe3.PNG"},
                    {brand: "geox", name: "Breath", desc: "This shoes are like a breath of the wild... nintendo like it", size : 42.5, color : "blue", price : 254, gender : "male", location : "nancy", img : "shoe2.PNG"},
                    {brand: "geox", name: "nike Air", desc: "coupe du bois avec classe", size : 43, color : "orange", price : 45, gender : "woman", location : "Motion", img : "shoe4.PNG"},
                    {brand: "geox", name: "Adidas", desc: "coupe du bois avec classe", size : 44, color : "red", price : 78, gender : "male", location : "Alaska", img : "shoe5.PNG"},
                    {brand: "adidas", name: "nike", desc: "coupe du bois avec classe", size : 46.5, color : "red", price : 25, gender : "male", location : "France", img : "shoe6.PNG"},
                    {brand: "adidas", name: "Respect-adi", desc: "Put some respect on the tree", size : 42, color : "blue", price : 40, gender : "male", location : "England", img : "shoe7.PNG"},
                    {brand: "Woody", name: "WoodPecker", desc: "Cut cut cut cuuuuuuuuut", size : 46, color : "yellow", price : 102, gender : "woman", location : "China", img : "shoe8.PNG"},
                    {brand: "DC", name: "Flash", desc: "Cut as fast as the light", size : 46, color : "yellow", price : 235, gender : "woman", location : "New york", img : "shoe9.PNG"}, 
                    {brand: "MARVEL", name: "Spiderman", desc: " With great shoes, comes great responsibility", size : 42, color : "red", price : 99, gender : "men", location : "NewYork", img : "shoe10.PNG"}
                ]);

	}),

  ]);
};

exports.down = function(knex, Promise) {

	return Promise.all([
		knex.schema.dropTable('product')
	]);
};

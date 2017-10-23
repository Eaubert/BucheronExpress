
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
      table.string('latitude');
      table.string('longitude');
      table.string('img');
      table.timestamps();
    }).then(function () {
                return knex("product").insert([
                    {brand: "nike", name: "AirWoody", desc: "No it's not woody from toy story", size : 47, color : "black", price : 42, gender : "woman", location : "Alaska", latitude : "64.75257845826648", longitude : "-150.94775430858135", img : "shoe1.PNG"},
                    {brand: "nike", name: "Nik-on", desc: "take a selfie with the tree", size : 43, color : "orange", price : 89, gender : "male", location : "Alaska", latitude : "64.75257845826648", longitude : "-150.94775430858135", img : "shoe3.PNG"},
                    {brand: "geox", name: "Breath", desc: "This shoes are like a breath of the wild... nintendo like it", size : 42.5, color : "blue", price : 254, gender : "male", location : "Amazonie", latitude : "-4.600517526521162", longitude : "-64.7006843984127", img : "shoe2.PNG"},
                    {brand: "geox", name: "nike Air", desc: "OMG it's PEWDIEPIE", size : 43, color : "orange", price : 45, gender : "woman", location : "Amazonie", latitude : "-4.600517526521162", longitude : "-64.7006843984127", img : "shoe4.PNG"},
                    {brand: "geox", name: "Adidas", desc: "I don't what is this", size : 44, color : "red", price : 78, gender : "male", location : "Suisse", latitude : "46.92325671891254", longitude : "7.991454675793648", img : "shoe5.PNG"},
                    {brand: "adidas", name: "nike", desc: "I love wood", size : 46.5, color : "red", price : 25, gender : "male", location : "Suisse", latitude : "46.92325671891254", longitude : "7.991454675793648", img : "shoe6.PNG"},
                    {brand: "adidas", name: "Respect-adi", desc: "Put some respect on the tree", size : 42, color : "blue", price : 40, gender : "male", location : "Paris", latitude : "48.856614", longitude : "2.352222", img : "shoe7.PNG"},
                    {brand: "Woody", name: "WoodPecker", desc: "Cut cut cut cuuuuuuuuut", size : 46, color : "yellow", price : 102, gender : "woman", location : "Paris", latitude : "48.856614", longitude : "2.352222", img : "shoe8.PNG"},
                    {brand: "DC", name: "Flash", desc: "Cut as fast as the light", size : 46, color : "yellow", price : 235, gender : "woman", location : "New York", latitude : "40.7127753", longitude : "-74.0059728", img : "shoe9.PNG"},
                    {brand: "MARVEL", name: "Spiderman", desc: " With great shoes, comes great responsibility", size : 42, color : "red", price : 99, gender : "men", location : "New York", latitude : "40.7127753", longitude : "-74.0059728", img : "shoe10.PNG"}
                ]);
	}),

  ]);
};

exports.down = function(knex, Promise) {

	return Promise.all([
		knex.schema.dropTable('product')
	]);
};

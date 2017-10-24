exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments();
      table.string('name');
      table.string('email').unique();
      table.string('password');
      table.string('passwordResetToken');
      table.dateTime('passwordResetExpires');
      table.string('gender');
      table.string('location');
      table.string('website');
      table.string('picture');
      table.string('facebook');
      table.string('twitter');
      table.string('google');
      table.string('vk');
      table.timestamps();
    }).then(function () {
                return knex("users").insert([
                    {name : "Admin" ,email :"SuperAdmin@gmail.com", password :"$2a$10$ykmW.BcAUGBaKIHyaxQEpuhmSZ1u7x.3RL5QktSeLWrxc80Zpj3ze"}
                  ]);
  	}),

    ]);
  };

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};

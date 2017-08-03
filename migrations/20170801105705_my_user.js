
exports.up = function(knex, Promise) {
  return knex.schema.createTable('my_user', function(table) {
    table.increments();
    table.string('googleId');
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.date('birthday');
    table.string('photo_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('my_user');
};

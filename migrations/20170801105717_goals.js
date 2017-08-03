
exports.up = function(knex, Promise) {
  return knex.schema.createTable('goal', function(table) {
    table.increments();
    table.string('title');
    table.integer('success');
    table.integer('total');
    table.string('frequency');
    table.date('start');
    table.integer('my_user_id').references('my_user.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('goal');
};


exports.seed = function(knex, Promise) {
  return knex('goal').del()
  .then(function() {
  return knex('my_user').del();
  })
};

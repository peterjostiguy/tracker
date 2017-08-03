
exports.seed = function(knex, Promise) {
  return knex('my_user').del()
    .then(function () {
      return Promise.all([
        knex('my_user').insert({id: 1, first_name: 'Peter', last_name: 'Ostiguy', email: "peterjostiguy@gmail.com"})
      ]);
    });
};

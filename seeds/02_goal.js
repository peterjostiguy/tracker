
exports.seed = function(knex, Promise) {
  return knex('goal').del()
    .then(function () {
      return Promise.all([
        knex('goal').insert({id: 1, title: 'Cardio', success: 17, total: 25, frequency: "daily", my_user_id: 1}),
        knex('goal').insert({id: 2, title: 'Weight', success: 12, total: 25, frequency: "daily", my_user_id: 1}),
        knex('goal').insert({id: 3, title: 'Save Money', success: 22, total: 25, frequency: "daily", my_user_id: 1}),
        knex('goal').insert({id: 4, title: 'Play Chef', success: 3, total: 5, frequency: "weekly", my_user_id: 1}),
        knex('goal').insert({id: 5, title: 'Random Act of Kindness', success: 5, total: 5, frequency: "weekly", my_user_id: 1})
      ]);
    });
};

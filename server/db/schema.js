module.exports = function(knex){

  knex.schema.hasTable('users').then(function(exists){
    if(!exists){
      return knex.schema.createTable('users', function(table){
        table.increments().primary();
        table.string('username');
        table.string('email');
        table.string('password');
        table.text('profile');
        table.timestamps();
      });
    }
  });

};
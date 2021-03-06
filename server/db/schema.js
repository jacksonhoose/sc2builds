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

  knex.schema.hasTable('builds').then(function(exists){
    if(!exists){
      return knex.schema.createTable('builds', function(table){
        table.increments().primary();
        table.string('name');
        table.text('description');
        table.text('race');
        table.text('difficulty');
        table.integer('rating');
        table.integer('user_id');
        table.boolean('published');
        table.timestamps();
      });
    }
  });

  knex.schema.hasTable('videos').then(function(exists){
    if(!exists){
      return knex.schema.createTable('videos', function(table){
        table.increments().primary();
        table.string('video_url');
        table.integer('user_id');
        table.integer('build_id');
        table.boolean('approved');
        table.timestamps();
      });
    }
  });

  knex.schema.hasTable('steps').then(function(exists){
    if(!exists){
      return knex.schema.createTable('steps', function(table){
        table.increments().primary();
        table.string('supply');
        table.string('screenshot');
        table.integer('user_id');
        table.integer('build_id');
        table.timestamps();
      });
    }
  });

  knex.schema.hasTable('comments').then(function(exists){
    if(!exists){
      return knex.schema.createTable('comments', function(table){
        table.increments().primary();
        table.text('text');
        table.integer('rating');
        table.integer('user_id');
        table.integer('build_id');
        table.timestamps();
      });
    }
  });

};
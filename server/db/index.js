module.exports = function(app){

  var knex = require('knex')({
    client: 'mysql',
    connection: {
      host     : '127.0.0.1',
      user     : 'root',
      password : 'root',
      database : 'sc2builds-dev',
      charset  : 'utf8'
    }
  });

  var bookshelf = require('bookshelf')(knex);

  // bookshelf becomes available across the app
  app.set('bookshelf', bookshelf);

  // make sure schema is in sync
  require('./schema')(knex);  

};
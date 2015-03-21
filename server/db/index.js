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

require('./schema')(knex);

module.exports = bookshelf;
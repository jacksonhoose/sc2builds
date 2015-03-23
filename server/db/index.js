var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'sc2builds-dev',
    charset  : 'utf8'
  },
  debug: true
});

var bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

require('./schema')(knex);

module.exports = bookshelf;
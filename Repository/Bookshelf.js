'use strict';
const Knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'senha',
        database: 'Genius',
        charset: 'utf8'
    }
});

module.exports = require('bookshelf')(Knex);

'use strict';
const bookshelf = require('../Repository/Bookshelf');

exports.model = bookshelf.Model.extend({
    tableName: 'Book'
});
'use strict';
const bookshelf = require('../Repository/Bookshelf');
const Book = require('./Book');

exports.model = bookshelf.Model.extend({

    tableName: 'Category',
    books: function() {
        return this.hasMany(Book, 'id');
    }
});
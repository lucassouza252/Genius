'use strict';
const bookshelf = require('../Repository/Bookshelf');
// const Author = require('./Author');
// const Category = require('./Category');

exports.model = bookshelf.Model.extend({
    tableName: 'Book',
    // author: function() {
    //     return this.belongsTo(Author, 'author');
    // },
    // category: function() {
    //     return this.belongsTo(Category, 'category');
    // }
});
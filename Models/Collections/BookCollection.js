const bookshelf = require('../../Repository/Bookshelf');
const Book = require('../OtherBook').model;

exports.collection = bookshelf.Collection.extend({
    model: Book
});
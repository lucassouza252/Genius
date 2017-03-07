'use strict';
const bookshelf = require('../../Repository/Bookshelf');
const Book = require('../Book').model;

exports.collection = bookshelf.Collection.extend({
    model: Book
});
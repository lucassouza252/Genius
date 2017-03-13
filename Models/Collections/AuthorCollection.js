'use strict';
const bookshelf = require('../../Repository/Bookshelf');
const Author = require('../Author').model;

exports.collection = bookshelf.Collection.extend({
    model: Author
});
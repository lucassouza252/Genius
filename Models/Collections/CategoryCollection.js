'use strict';
const bookshelf = require('../../Repository/Bookshelf');
const Category = require('../Category').model;

exports.collection = bookshelf.Collection.extend({
    model: Category
});
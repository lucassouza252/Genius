'use strict';
const bookshelf = require('../../Repository/Bookshelf');
const Sales = require('../Sales').model;

exports.collection = bookshelf.Collection.extend({
    model: Sales
});
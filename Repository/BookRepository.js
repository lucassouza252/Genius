'use strict';
const Book = require('../Models/Book').model;
const BookCollection = require('../Models/Collections/BookCollection').collection;

exports.list = function(req, res) {

    new Book().fetchAll().then(function(collection) {
        res.send(collection.toJSON());
    });
};

exports.create = function(newBook, res) {

    new Book({
        name: newBook.name,
        description: newBook.description,
        author: newBook.author,
        imageUrl: newBook.imageUrl,
        price: newBook.price
    }).save().then(function(result) {
        res.status(200).json(result);
    });
}

exports.find = function(bookId, res) {

    new Book({ id: bookId }).fecth().then(function(result) {
        if (result == undefined) {
            res.json(404, { error: 'Not Found' });
        } else {
            res.status(200).json(result);
        }
    });
};

exports.update = function(bookId, updateBook, res) {

    new Book({ id: bookId }).save(updateBook, { patch: true }).then(function(result) {
        if (result == undefined) {
            res.json(404, { error: 'Not Found' });
        } else {
            res.status(200).json(result);
        }
    });
}

exports.remove = function(bookId, res) {

    new Book({ id: bookId }).destroy().then(function(result) {
        if (result == undefined) {
            res.json(404, { error: 'Not Found' });
        } else {
            res.status(200).json(result);
        }
    });
}
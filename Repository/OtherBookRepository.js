const Book = require('../Models/Collections/BookCollection').collection;

exports.list = function(req, res) {

    new Book().fetch().then(function(collection) {
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
        res.json(200, result);
    });
}

exports.find = function(bookId, res) {

    new Book({ id: bookId }).fecth().then(function(result) {
        if (result == undefined) {
            res.json(404, { error: 'Not Found' });
        } else {
            res.json(200, result);
        }
    });
};

exports.update = function(bookId, updateBook, res) {

    new Book({ id: bookId }).save(updateBook, { patch: true }).then(function(result) {
        if (result == undefined) {
            res.json(404, { error: 'Not Found' });
        } else {
            res.json(200, result);
        }
    });
}

exports.remove = function(bookId, res) {

    new Book({ id: bookId }).destroy().then(function(result) {
        if (result == undefined) {
            res.json(404, { error: 'Not Found' });
        } else {
            res.json(200, result);
        }
    });
}
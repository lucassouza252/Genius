"use strict";
const Book = require("../Models/Book");

class BookRepository {

    list(req, res) {

        Book.BookModel.find({}).exec((error, book) => {
            return res.json(book);
        });
    }

    create(req, res) {

        let data = [];

        req.on('data', chunk => {
            data.push(chunk);
        }).on('end', () => {
            let bookString = Buffer.concat(data).toString();
            let book = bookString ? JSON.parse(bookString) : {};
            Book.BookModel.create(book, (error, book) => {
                if (book) {
                    return res.send(book);
                } else {
                    return res.status(400).send({
                        success: false
                    });
                }
            });
        });
    }

    find(req, res) {

        const id = req.params.id;

        if (id) {
            Book.BookModel.findById(id).exec((error, book) => {
                if (book) {
                    return res.send(book);
                } else {
                    return res.status(400).send({
                        success: false
                    });
                }
            });
        } else {
            res.status(400).send({
                succes: false
            });
        }
    }

    update(req, res) {

        const id = req.params.id;

        if (id) {
            let data = [];

            req.on('data', chunk => {
                data.push(chunk);
            }).on('end', () => {
                let bookString = Buffer.concat(data).toString();

                let bookUpdate = bookString ? JSON.parse(bookString) : {};

                Book.BookModel.findById(id).exec((erro, book) => {
                    if (book) {
                        if (bookUpdate.name) {
                            book.name = bookUpdate.name;
                        }
                        if (bookUpdate.description) {
                            book.description = bookUpdate.description;
                        }
                        if (bookUpdate.author) {
                            book.author = bookUpdate.author;
                        }
                        if (bookUpdate.imageUrl) {
                            book.imageUrl = bookUpdate.imageUrl;
                        }
                        if (bookUpdate.price) {
                            book.price = bookUpdate.price;
                        }
                        book.save();
                        return res.send(book);
                    } else {
                        return res.status(500).send({
                            success: false
                        });
                    }
                });
            });
        } else {
            res.status(500).send({
                success: false
            });
        }
    }

    remove(req, res) {

        const id = req.params.id;

        if (id) {
            Book.BookModel.findById(id).exec((error, book) => {
                if (book) {
                    book.remove();
                    return res.send({
                        success: true
                    });
                } else {
                    return res.status(400).send({
                        success: false
                    });
                }
            });
        } else {
            res.status(400).send({
                success: false
            });
        }
    }
}

exports.BookRepository = BookRepository;
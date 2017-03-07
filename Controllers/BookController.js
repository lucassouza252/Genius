"use strict";
const BookRepository = require("../Repository/BookRepository");


class BookController {

    constructor() {}

    create(req, res) {

        let newBook = req.body;
        BookRepository.create(newBook, res);
    }

    find(req, res) {

        BookRepository.list(req, res);
    }

    findById(req, res) {

        let bookId = req.params.id;

        BookRepository.find(bookId, res);
    }

    update(req, res) {

        let bookId = req.params.id;
        let updateBook = req.body;

        BookRepository.update(bookId, updateBook, res);
    }

    delete(req, res) {

        let bookId = req.params.id;

        BookRepository.remove(bookId, res);
    }
}

exports.BookController = BookController;
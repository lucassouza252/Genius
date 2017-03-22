"use strict";
const BookRepository = require("../Repository/BookRepository");


class BookController {

    constructor() {
        this.bookRepo = new BookRepository.BookRepository();
    }

    create(req, res) {

        let newBook = req.body;
        this.bookRepo.create(newBook, res);
    }

    find(req, res) {

        this.bookRepo.list(req, res);
    }

    findById(req, res) {

        let bookId = req.params.id;

        this.bookRepo.find(bookId, res);
    }

    update(req, res) {

        let bookId = req.params.id;
        let updateBook = req.body;

        this.bookRepo.update(bookId, updateBook, res);
    }

    delete(req, res) {

        let bookId = req.params.id;

        this.bookRepo.remove(bookId, res);
    }
}

exports.BookController = BookController;
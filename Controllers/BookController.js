"use strict";
const BookRepository = require("../Repository/BookRepository");
const OtherBookRepository = require('../Repository/OtherBookRepository');

class BookController {

    constructor() {

        this.bookRepository = new BookRepository.BookRepository();

    }

    create(req, res) {

        let newBook = req.body;

        OtherBookRepository.create(newBook, res);
    }

    find(req, res) {

        OtherBookRepository.list(req, res);
    }

    findById(req, res) {

        let bookId = req.params.id;

        OtherBookRepository.find(bookId, res);
    }

    update(req, res) {

        let bookId = req.params.id;
        let updateBook = req.body;

        OtherBookRepository.update(bookId, updateBook, res);
    }

    delete(req, res) {

        let bookId = req.params.id;

        OtherBookRepository.remove(bookId, res);
    }
}

exports.BookController = BookController;
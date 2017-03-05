"use strict";
const BookRepository = require("../Repository/BookRepository");
//const SqliteRepository = require("../Repository/SqliteRepository");

class BookController {

    constructor() {

        this.bookRepository = new BookRepository.BookRepository();
        //this.sqliteRepository = new SqliteRepository.SqliteRepository();
    }

    create(req, res) {

        this.bookRepository.create(req, res);
    }

    find(req, res) {

        this.bookRepository.list(req, res);
    }

    findById(req, res) {

        this.bookRepository.find(req, res);
    }

    update(req, res) {

        this.bookRepository.update(req, res);
    }

    delete(req, res) {

        this.bookRepository.remove(req, res);
    }
}

exports.BookController = BookController;
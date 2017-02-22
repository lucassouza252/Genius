"use strict";
var BookRepository_1 = require("../Repository/BookRepository");
var BookController = (function () {
    function BookController() {
        this.bookRepository = new BookRepository_1.BookRepository();
    }
    BookController.prototype.create = function (req, res) {
        this.bookRepository.create(req, res);
    };
    BookController.prototype.find = function (req, res) {
        this.bookRepository.list(req, res);
    };
    BookController.prototype.findById = function (req, res) {
        this.bookRepository.find(req, res);
    };
    BookController.prototype.update = function (req, res) {
        this.bookRepository.update(req, res);
    };
    BookController.prototype.delete = function (req, res) {
        this.bookRepository.remove(req, res);
    };
    return BookController;
}());
exports.BookController = BookController;

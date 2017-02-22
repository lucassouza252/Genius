"use strict";
var BookRepository_1 = require("../Repository/BookRepository");
var BookController = (function () {
    function BookController() {
        this.bookRepository = new BookRepository_1.BookRepository();
    }
    BookController.prototype.create = function (req, res) {
        var result = false;
        try {
            result = this.bookRepository.create(req, res);
            if (result) {
                res.status(200);
            }
            else {
                res.status(500);
            }
        }
        catch (Exception) {
            console.log('Erro: ' + Exception.message);
        }
    };
    BookController.prototype.find = function (req, res) {
        var books = new Array();
        try {
            books = this.bookRepository.find(req, res);
            res.write(JSON.stringify(books));
        }
        catch (Exception) {
            console.log('Erro: ' + Exception.message);
        }
    };
    BookController.prototype.findById = function (req, res) {
        var book;
        try {
            book = this.bookRepository.find(req, res);
            res.write(JSON.stringify(book));
        }
        catch (Exception) {
            console.log('Erro: ' + Exception.message);
        }
    };
    BookController.prototype.update = function (req, res) {
        var result = false;
        try {
            result = this.bookRepository.update(req, res);
            if (result) {
                res.status(200);
            }
            else {
                res.status(500);
            }
        }
        catch (Exception) {
            console.log('Erro: ' + Exception.message);
        }
    };
    BookController.prototype.delete = function (req, res) {
        var result = false;
        try {
            result = this.bookRepository.delete(req, res);
            if (result) {
                res.status(200);
            }
            else {
                res.status(500);
            }
        }
        catch (Exception) {
            console.log('Erro: ' + Exception.message);
        }
    };
    return BookController;
}());
exports.BookController = BookController;

"use strict";
var express = require("express");
var BookController_1 = require("../Controllers/BookController");
var Routes = (function () {
    function Routes() {
        this.router = express.Router();
        this.init();
    }
    Routes.prototype.init = function () {
        this.methods();
    };
    Routes.prototype.methods = function () {
        var control = new BookController_1.BookController();
        this.router.get('/book', function (req, res) {
            control.find(req, res);
        });
        this.router.get('/book/:id', function (req, res) {
            control.findById(req, res);
        });
        this.router.post('/book', function (req, res) {
            control.create(req, res);
        });
        this.router.put('/book/:id', function (req, res) {
            control.update(req, res);
        });
        this.router.delete('/book/:id', function (req, res) {
            control.delete(req, res);
        });
    };
    return Routes;
}());
exports.Routes = Routes;

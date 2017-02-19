"use strict";
var express = require("express");
var Routes = (function () {
    function Routes() {
        this.router = express.Router();
        this.init();
    }
    Routes.prototype.init = function () {
        this.methods();
    };
    Routes.prototype.methods = function () {
        this.router.get('/book', function (req, res) {
        });
        this.router.get('/book/:id', function (req, res) {
        });
        this.router.post('/book', function (req, res) {
        });
        this.router.put('/book/:id', function (req, res) {
        });
        this.router.delete('/book/:id', function (req, res) {
        });
    };
    return Routes;
}());
exports.Routes = Routes;

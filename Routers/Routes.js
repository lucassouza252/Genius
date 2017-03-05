"use strict";
const express = require("express");
const bookController = require("../Controllers/BookController");

class Routes {

    constructor() {

        this.router = express.Router();
        this.init();
    }

    init() {

        this.methods();
    }

    methods() {

        let control = new bookController.BookController();

        this.router.get('/book', (req, res) => {
            control.find(req, res);
        });

        this.router.get('/book/:id', (req, res) => {
            control.findById(req, res);
        });

        this.router.post('/book', (req, res) => {
            control.create(req, res);
            console.log(req.params.name);
        });

        this.router.put('/book/:id', (req, res) => {
            control.update(req, res);
        });

        this.router.delete('/book/:id', (req, res) => {
            control.delete(req, res);
        });
    }
}

exports.Routes = Routes;

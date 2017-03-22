"use strict";
const express = require("express");
const bookController = require("../Controllers/BookController");
const salesController = require("../Controllers/SalesController");

class Routes {

    constructor() {

        this.router = express.Router();
        this.init();
    }

    init() {

        this.methods();
    }

    methods() {

        let bookControl = new bookController.BookController();
        let salesControl = new salesController.SalesController();

        this.router.get('/book', (req, res) => {
            bookControl.find(req, res);
        });

        this.router.get('/book/:id', (req, res) => {
            bookControl.findById(req, res);
        });

        this.router.post('/book', (req, res) => {
            bookControl.create(req, res);
        });

        this.router.put('/book/:id', (req, res) => {
            bookControl.update(req, res);
        });

        this.router.delete('/book/:id', (req, res) => {
            bookControl.delete(req, res);
        });

        this.router.get('/sales', (req, res) => {
            salesControl.find(req, res);
        });

        this.router.post('/sales', (req, res) => {
            salesControl.create(req, res);
        });
    }
}

exports.Routes = Routes;
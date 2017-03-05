"use strict";
const mongoose = require("mongoose");

exports.BookSchema = new mongoose.Schema({

    name: String,
    description: String,
    author: String,
    imageUrl: String,
    price: Number
});

exports.BookModel = mongoose.model("BookModel", exports.BookSchema);
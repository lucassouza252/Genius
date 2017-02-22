import * as mongoose from "mongoose";

export interface IBook{

    name: string;
    description: string;
    author: string;
    imageUrl?: string;
    price: number;
}

export interface IBookModel extends IBook, mongoose.Document {}

export var BookSchema = new mongoose.Schema({

    name: String,
    description: String,
    author: String,
    imageUrl: String,
    price: Number
});

export var BookModel = mongoose.model<IBookModel>("BookModel", BookSchema);

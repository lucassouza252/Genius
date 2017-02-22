import * as express from 'express';
import { IBookRepository } from './IBookRepository';
import { IBook, BookModel, IBookModel }  from '../Models/Book';

export class BookRepository implements IBookRepository{

    public list(req: express.Request, res: express.Response): any {

        BookModel.find({}).exec((error: any, book: IBookModel[])=>{
            return res.send({
                book: book || []
            });
        });
    }

    public create(req: express.Request, res: express.Response): any{

        let data = [];
        req.on('data', chunk=>{
            data.push(chunk);
        }).on('end', ()=>{
            let bookString = Buffer.concat(data).toString();
            let book: IBook = bookString ? JSON.parse(bookString) : {};
            BookModel.create(book, (error: any, book: IBookModel)=>{
                if(book){
                    return res.send(book);
                }
                else{
                    return res.status(400).send({
                        success: false
                    });
                }
            });
        });
    }

    public find(req: express.Request, res: express.Response): any{

        const id = req.params.id;
        if(id){
            BookModel.findById(id).exec((error: any, book: IBookModel)=>{
                if(book){
                    return res.send(book);
                }
                else{
                    return res.status(400).send({
                        success: false
                    });
                }
            });
        }
        else{
            res.status(400).send({
                succes: false
            });
        }
    }

    public update(req: express.Request, res: express.Response): any{

        const id = req.params.id;
        if(id){
            let data = [];
            req.on('data', chunk=>{
                data.push(chunk);
            }).on('end', ()=>{
                let bookString = Buffer.concat(data).toString();
                let bookUpdate: IBook = bookString ? JSON.parse(bookString) : {};
                BookModel.findById(id).exec((erro: any, book: IBookModel)=>{
                    if(book){
                        if(bookUpdate.name){ book.name = bookUpdate.name ;}
                        if(bookUpdate.description){ book.description = bookUpdate.description ;}
                        if(bookUpdate.author){ book.author = bookUpdate.author ;}
                        if(bookUpdate.imageUrl){ book.imageUrl = bookUpdate.imageUrl ;}
                        if(bookUpdate.price){ book.price = bookUpdate.price ;}
                        book.save();
                        return res.send(book);
                    }
                    else{
                        return res.status(500).send({
                            success: false
                        });
                    }
                });
            });
        }
        else{
            res.status(500).send({
                success: false
            });
        }
    }

    public remove(req: express.Request, res: express.Response): any{

        const id = req.params.id;
        if(id){
            BookModel.findById(id).exec((error: any, book: IBookModel)=>{
                if(book){
                    book.remove();
                    return res.send({
                        success: true
                    });
                }
                else{
                    return res.status(400).send({
                        success: false
                    });
                }
            });
        }
        else{
            res.status(400).send({
                success: false
            });
        }
    }
}

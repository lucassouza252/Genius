import * as express from 'express';
import { Book } from '../Models/Book';
import { BookRepository } from '../Repository/BookRepository';

export class BookController{

    private bookRepository: BookRepository;

    constructor() {

        this.bookRepository = new BookRepository();
    }

    public create(req: express.Request, res: express.Response): void{

        let result: boolean = false;
        try{
            result = this.bookRepository.create(req, res);
            if(result){
                res.status(200);
            }
            else{
                res.status(500);
            }
        }
        catch(Exception){
            console.log('Erro: ' + Exception.message);
        }

    }

    public find(req: express.Request, res: express.Response): void{

        let books = new Array<Book>();

        try{
            books = this.bookRepository.find(req, res);
            res.write(JSON.stringify(books));
        }
        catch(Exception){
            console.log('Erro: '+ Exception.message);
        }
    }

    public findById(req: express.Request, res: express.Response): void{

        let book:Book[];

        try{
            book = this.bookRepository.find(req, res);
            res.write(JSON.stringify(book));
        }
        catch(Exception){
            console.log('Erro: '+ Exception.message);
        }
    }

    public update(req: express.Request, res: express.Response): void{

        let result: boolean = false;
        try{
            result = this.bookRepository.update(req, res);
            if(result){
                res.status(200);
            }
            else{
                res.status(500);
            }
        }
        catch(Exception){
            console.log('Erro: ' + Exception.message);
        }
    }

    public delete(req: express.Request, res: express.Response): void{

        let result: boolean = false;
        try{
            result = this.bookRepository.delete(req, res);
            if(result){
                res.status(200);
            }
            else{
                res.status(500);
            }
        }
        catch(Exception){
            console.log('Erro: ' + Exception.message);
        }
    }
}

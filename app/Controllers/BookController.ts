import * as express from 'express';
import { BookModel }  from '../Models/Book';
import { BookRepository } from '../Repository/BookRepository';

export class BookController{

    private bookRepository;

    constructor() {

        this.bookRepository = new BookRepository();
    }

    public create(req: express.Request, res: express.Response): void{

        this.bookRepository.create(req, res);
    }

    public find(req: express.Request, res: express.Response): void{

        this.bookRepository.list(req, res);
    }

    public findById(req: express.Request, res: express.Response): void{

        this.bookRepository.find(req, res);
    }

    public update(req: express.Request, res: express.Response): void{

        this.bookRepository.update(req, res);
    }

    public delete(req: express.Request, res: express.Response): void{

        this.bookRepository.remove(req, res);
    }
}

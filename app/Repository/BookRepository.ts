import * as express from 'express';
import { IBookRepository } from './IBookRepository';
import { Book } from '../Models/Book';

export class BookRepository implements IBookRepository{

    find(req: express.Request, res: express.Response): Array<Book>{
        return;
    }
    findById(req: express.Request, res: express.Response): Book{
        return;
    }
    create(req: express.Request, res: express.Response): boolean{
        return;
    }
    update(req: express.Request, res: express.Response): boolean{
        return;
    }
    delete(req: express.Request, res: express.Response): boolean{
        return;
    }
}

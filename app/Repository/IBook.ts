import * as express from 'express';
import { Book } from '../Models/Book';

export interface IBook{

    find(req: express.Request, res: express.Response): Array<Book>;
    findById(req: express.Request, res: express.Response): Book;
    create(req: express.Request, res: express.Response): void;
    update(req: express.Request, res: express.Response): void;
    delete(req: express.Request, res: express.Response): void;
}

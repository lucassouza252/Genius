import * as express from 'express';
import { Book } from '../Models/Book';

export interface IBookRepository{

    find(req: express.Request, res: express.Response): Array<Book>;
    findById(req: express.Request, res: express.Response): Book;
    create(req: express.Request, res: express.Response): boolean;
    update(req: express.Request, res: express.Response): boolean;
    delete(req: express.Request, res: express.Response): boolean;
}

import * as express from 'express';
import { IBook } from '../Repository/IBook';
import { Book } from '../Models/Book';

export class BookController implements IBook {

    constructor() {}

    find(req: express.Request, res: express.Response): Array<Book>{

        return;
    }

    findById(req: express.Request, res: express.Response): Book{

        return;
    }

    create(req: express.Request, res: express.Response): void{

    }

    update(req: express.Request, res: express.Response): void{

    }
    
    delete(req: express.Request, res: express.Response): void{

    }
}

import * as express from 'express';

export interface IBookRepository{

    list(req: express.Request, res: express.Response): any;
    find(req: express.Request, res: express.Response): any;
    create(req: express.Request, res: express.Response): any;
    update(req: express.Request, res: express.Response): any;
    remove(req: express.Request, res: express.Response): any;
}

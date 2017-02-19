import * as express  from 'express';
import { BookController } from '../Controllers/BookController';

export class Routes{

    public router: express.Router;

    constructor(){

        this.router = express.Router();
        this.init();
    }

    private init(): void{

        this.methods();
    }

    private methods(): void{

        let control = new BookController();

        this.router.get('/book', (req: express.Request, res: express.Response)=>{
            control.find(req, res);
        });

        this.router.get('/book/:id', (req: express.Request, res: express.Response)=>{
            control.findById(req, res);
        });

        this.router.post('/book', (req: express.Request, res: express.Response)=>{
            control.create(req, res);
        });

        this.router.put('/book/:id', (req: express.Request, res: express.Response)=>{
            control.update(req, res);
        });
        
        this.router.delete('/book/:id', (req: express.Request, res: express.Response)=>{
            control.delete(req, res);
        });
    }
}

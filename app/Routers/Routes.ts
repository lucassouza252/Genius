import * as express  from 'express';

export class Routes{

    private router: express.Router;

    constructor(){
        this.router = express.Router();
    }

    private methods(): void{

        this.router.get('/book', (req: express.Request, res: express.Response)=>{

        });
        this.router.get('/book/:id', (req: express.Request, res: express.Response)=>{

        });
        this.router.post('/book', (req: express.Request, res: express.Response)=>{

        });
        this.router.put('/book/:id', (req: express.Request, res: express.Response)=>{

        });
        this.router.delete('/book/:id', (req: express.Request, res: express.Response)=>{

        });
    }
}

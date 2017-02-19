import * as express  from 'express';

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

import * as express from 'express';
import { Routes } from './Routers/Routes';
import  http  = require ('http');
import * as path from "path";

class Server{

    public app: any;
    private server: any;
    private public: string;
    private route: any;
    private port: number;

    public static init(): Server {
        return new Server();
    }

    constructor(){

        this.app = express();
        this.server = http.createServer(this.app);
        this.config();
        this.listen();
        this.router();
    }

    private config(): void{

        this.port = process.env.PORT || 3000;
        this.app.use(express.static(__dirname + '/public'));
    }

    private listen(): void {

        this.server.listen(this.port);
        this.server.on("error", erro =>{
            console.log("Erro: " + Error);
        });
        
        this.server.on("listening", ()=>{
            console.log("Listening at localhost:%s", this.port);
        });
    }

    private router(): void{

        let expressRoute: express.Router = express.Router();
        this.route = new Routes();

        expressRoute.get('/', (req: express.Request, res: express.Response)=>{
            res.sendFile(__dirname + '/public');
        });
    }
}

export = new Server().app;

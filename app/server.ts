import * as express from 'express';
import { Routes } from './Routers/Routes';
import  http  = require ('http');
import * as path from "path";
import { DbConnection } from './Repository/Config/DbConnection';

class Server{

    public app: any;
    private server: any;
    private public: string;
    private routes: any;
    private port: number;
    private dbConnect: any;

    public static init(): Server {
        return new Server();
    }

    constructor(){

        this.app = express();
        this.server = http.createServer(this.app);
        this.config();
        this.listen();
        this.router();
        this.dbConnect = new DbConnection();
        this.dbConnect.conect();
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

        //Init of the Api
        this.routes = new Routes();
        this.app.use("/api", this.routes.router);

        expressRoute.get('/', (req: express.Request, res: express.Response)=>{
            res.sendFile(__dirname + '/public');
        });

        this.app.use("*", expressRoute);
    }
}

export = new Server().app;
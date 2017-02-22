import * as express from 'express';
import { Routes } from './Routers/Routes';
import  http  = require ('http');
import * as path from "path";
import * as mongoose from "mongoose";

class Server{

    public app: any;
    private server: any;
    private public: string;
    private mongo: any;
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
        this.data();
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

    private data(): void{

        const mongoUri = process.env.MONGODB_URI || "mongodb://mainuser:root@ds157479.mlab.com:57479/bookstory";

        this.mongo = mongoose.connect(mongoUri);
        (<any>mongoose).Promise = global.Promise;
    }
}

export = new Server().app;

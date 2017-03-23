"use strict";
const express = require("express");
const routes = require("./Routers/Routes");
const http = require("http");
const bodyParser = require("body-parser");

class Server {

    static init() {
        return new Server();
    }

    constructor() {

        this.app = express();
        this.server = http.createServer(this.app);
        this.config();
        this.listen();
        this.router();
    }

    config() {

        this.port = process.env.PORT || 3000;
        this.app.use(express.static(__dirname + '/../public'));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(function(req, res, next) {
            var oneof = false;
            if (req.headers.origin) {
                res.header('Access-Control-Allow-Origin', req.headers.origin);
                oneof = true;
            }
            if (req.headers['access-control-request-method']) {
                res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
                oneof = true;
            }
            if (req.headers['access-control-request-headers']) {
                res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
                oneof = true;
            }
            if (oneof) {
                res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
            }
            // intercept OPTIONS method
            if (oneof && req.method == 'OPTIONS') {
                res.sendStatus(200);
            } else {
                next();
            }
        });
    }

    listen() {

        this.server.listen(this.port);
        this.server.on("error", erro => {
            console.log("Erro: " + erro);
        });
        this.server.on("listening", () => {
            console.log("Listening at localhost:%s", this.port);
        });
    }

    router() {

        let expressRoute = express.Router();
        //Init of the Api
        this.routes = new routes.Routes();
        this.app.use("/api", this.routes.router);
        this.app.use(express.static(__dirname + '/public'));
        this.app.use("*", expressRoute);
    }
}

module.exports = new Server().app;
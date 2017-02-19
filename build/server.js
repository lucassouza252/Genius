"use strict";
var express = require("express");
var Routes_1 = require("./Routers/Routes");
var http = require("http");
var DbConnection_1 = require("./Repository/Config/DbConnection");
var Server = (function () {
    function Server() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.config();
        this.listen();
        this.router();
        this.dbConnect = new DbConnection_1.DbConnection();
        this.dbConnect.conect();
    }
    Server.init = function () {
        return new Server();
    };
    Server.prototype.config = function () {
        this.port = process.env.PORT || 3000;
        this.app.use(express.static(__dirname + '/public'));
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.server.listen(this.port);
        this.server.on("error", function (erro) {
            console.log("Erro: " + Error);
        });
        this.server.on("listening", function () {
            console.log("Listening at localhost:%s", _this.port);
        });
    };
    Server.prototype.router = function () {
        var expressRoute = express.Router();
        //Init of the Api
        this.routes = new Routes_1.Routes();
        this.app.use("/api", this.routes.router);
        expressRoute.get('/', function (req, res) {
            res.sendFile(__dirname + '/public');
        });
        this.app.use("*", expressRoute);
    };
    return Server;
}());
module.exports = new Server().app;

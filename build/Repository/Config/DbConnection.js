"use strict";
var mysql = require("mysql");
var DbConnection = (function () {
    function DbConnection() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'senha',
            database: '91237655'
        });
    }
    DbConnection.prototype.conect = function () {
        this.connection.connect(function (err) {
            if (err) {
                console.error('Connection ' + err.stack);
            }
            console.log('Database Connected');
        });
    };
    DbConnection.prototype.desconect = function () {
        this.connection.end();
    };
    return DbConnection;
}());
exports.DbConnection = DbConnection;

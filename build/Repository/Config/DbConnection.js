"use strict";
var mysql = require("mysql");
var DbConnection = (function () {
    function DbConnection() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'senha',
            database: 'Genius'
        });
    }
    DbConnection.prototype.conect = function () {
        this.connection.connect(function (err) {
            if (err) {
                console.error('Connection ' + err.stack);
                return;
            }
            console.log('Database Connected');
        });
    };
    return DbConnection;
}());
exports.DbConnection = DbConnection;

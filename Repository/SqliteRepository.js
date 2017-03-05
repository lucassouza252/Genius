"use strict";
const sqlite = require("sqlite-sync");

class SqliteRepository {

    constructor() {}

    find(req, res) {

        return res.json(sqlite.run('SELECT * FROM books'));
    }

    create(req, res) {

        sqlite.insert('books', req.body, function(id) {
            console.log(req.body);
            return res.send({ 'id': id });
        });
    }
}

exports.SqliteRepository = SqliteRepository;
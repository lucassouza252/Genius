'use strict';
const salesRepository = require('../Repository/SalesRepository');

class SalesController {

    constructor() {
        this.salesRepo = new salesRepository.SalesRepository();
    }

    create(req, res) {

        let newSales = req.body;
        this.salesRepo.create(newSales, res);
    }

    find(req, res) {

        this.salesRepo.list(req, res);
    }
}

exports.SalesController = SalesController;
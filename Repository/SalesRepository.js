'use strict';
const Sales = require('../Models/Sales').model;
const SalesCollection = require('../Models/Collections/SalesCollection').collection;

class SalesRepository {

    list(req, res) {

        new Sales().fetchAll().then(function(result) {
            res.status(200).json(result);
        });
    };

    create(newSales, res) {

        new Sales({
            buyerName: newSales.buyerName,
            quantity: newSales.quantity,
            ids: newSales.ids
        }).save().then(function(result) {
            res.status(200).json(result);
        });
    };
}

exports.SalesRepository = SalesRepository;
'use strict';

const catfacts = require('../../data/facts');
const Catfact = require('../models/catfact');
const log = require('debug')('catfactController')

exports.getRandomCatfact = function (req, res) {

    log("random catfact requested");
    const index = Math.floor(Math.random() * catfacts.length);

    let catfact = catfacts[index];

    let item = new Catfact(index, catfact);

    res.json(item);
};

exports.getCatfactById = function (req, res) {

    let index = req.params.catfactId;

    log(`catfact requested by id ${index}`);

    //if id/index out of bounds, return a 404 error.
    if (index < 0 || index >= catfacts.length) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(404).send('No cat fact found with that id');
        return;
    }

    let catfact = catfacts[index];

    let item = new Catfact(index, catfact);

    res.json(item);
}

exports.getAllCatfacts = function (req, res) {

    log("all catfacts requested");

    let result = [];

    for (let i = 0; i < catfacts.length; i++) {
        result.push(new Catfact(i, catfacts[i]));
    }

    res.json(result);
}


'use strict';

const catfacts = require('../../data');
const Catfact = require('../models/catfact');

exports.getRandomCatfact = function (req, res) {

    console.log("random catfact requested");
    const index = Math.floor(Math.random() * catfacts.length);

    var catfact = catfacts[index];

    var item = new Catfact(index, catfact);

    res.json(item);
};

exports.getCatfactById = function (req, res) {

    var index = req.params.catfactId;

    //if id/index out of bounds, return a 404 error.
    if (index < 0 || index >= catfacts.length) {
        res.status(404).send({ error: 'No cat fact found with that id' })
        return;
    }

    var catfact = catfacts[index];

    var item = new Catfact(index, catfact);

    res.json(item);
}

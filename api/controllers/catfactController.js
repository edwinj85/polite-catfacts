'use strict';


console.log(process.cwd());
console.log("test");
var data = require('../../data.json');
const catfacts = data.catfacts;

exports.getRandomCatfact = function (req, res) {

    console.log("random catfact requested");
    const index = Math.floor(Math.random() * catfacts.length);

    var catfact = catfacts[index];

    var item = { id: index, fact: catfact }


    //if (err) {
    //res.send(err);
    //}

    res.json(item);
};

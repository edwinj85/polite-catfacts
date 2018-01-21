'use strict';

module.exports = function (app) {
    var catfactsController = require('../controllers/catfactController');

    // catfact Routes
    app.route('/catfact')
        .get(catfactsController.getRandomCatfact);

    app.route('/catfact/:catfactId(\\d+)/')
        .get(catfactsController.getCatfactById);

    app.route('/catfact/all')
        .get(catfactsController.getAllCatfacts);
};
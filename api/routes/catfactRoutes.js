'use strict';

module.exports = function (app) {

    const catfactsController = require('../controllers/catfactController');

    const swaggerUi = require('swagger-ui-express');
    const swaggerDoc = require('../../data/swagger.json');
    
    // catfact Routes
    app.route('/catfact')
        .get(catfactsController.getRandomCatfact);

    app.route('/catfact/:catfactId(\\d+)/')
        .get(catfactsController.getCatfactById);

    app.route('/catfact/all')
        .get(catfactsController.getAllCatfacts);

    //setup swagger
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

    //route all unmatched to the docs page (this must be last!)
    app.get('*', catfactsController.default);
};
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

var swaggerDefinition = {
    info: {
        title: 'Polite Catfacts API',
        version: '1.0.0',
        description: 'A simple api for getting nice and polite catfacts',
    },
    host: `'/:${port}`,
    basePath: '/',
};

//import routes
const routes = require('./api/routes/catfactRoutes');
routes(app);

//setup swagger
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//start
app.listen(port);

console.log('polite-catfact RESTful API server started on: ' + port);
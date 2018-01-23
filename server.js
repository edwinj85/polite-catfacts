const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./data/swagger.json');
const helmet = require('helmet')
const log = require('debug')('server')

//import routes
const routes = require('./api/routes/catfactRoutes');
routes(app);

//switch on/off certain headers/settings for security reasons.
app.use(helmet());

//setup swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//route all unmatched to the docs page (this must be last!)
app.get('*', function (req, res) {
    res.status(404).sendFile(__dirname + "/html/404.html")
});

//start
app.listen(port);

log('polite-catfact RESTful API server started on: ' + port);

/**
 * Export the port so that it can be used by Chai
 */
exports.port = port;

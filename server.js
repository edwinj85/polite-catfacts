const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');
const helmet = require('helmet')

//import routes
const routes = require('./api/routes/catfactRoutes');
routes(app);

//switch on/off certain headers/settings for security reasons.
app.use(helmet());

//setup swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//route all unmatched to the docs page (this must be last!)
app.get('*', function (req, res) {
    res.status(404)
        .send("Resource Not Found. Have you tried the <a href='/docs'>documentation?</a>");
});

//start
app.listen(port);

console.log('polite-catfact RESTful API server started on: ' + port);

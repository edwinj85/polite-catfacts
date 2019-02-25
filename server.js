'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const helmet = require('helmet')
const log = require('debug')('catfact-api:server')

//provide globals for all modules
global.__basedir = __dirname;
global.__port = port;

//switch on/off certain headers/settings for security reasons.
app.use(helmet());

//import routes
const routes = require('./api/routes/catfactRoutes');
routes(app);

//start
app.listen(port);

log('polite-catfact RESTful API server started on: ' + port);

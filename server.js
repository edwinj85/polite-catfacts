const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/catfactRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('cat fact RESTful API server started on: ' + port);
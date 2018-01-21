const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//import routes
const routes = require('./api/routes/catfactRoutes');
routes(app);

app.listen(port);

console.log('cat fact RESTful API server started on: ' + port);
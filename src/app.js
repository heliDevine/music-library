const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');

const artistRouter = require('./routes/artist');

const app = express();
app.use(express.json());

app.use('/artist', artistRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

module.exports = app;

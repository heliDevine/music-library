const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');

const artistRouter = require('./routes/artist');
// const artistController = require('./controllers/artist');

const app = express();
app.use(express.json());

app.use('/artist', artistRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// app.get('/', (req, res) => {
//   res.status(200).send('Hello World!')
// })

module.exports = app;

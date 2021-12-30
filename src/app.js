const express = require('express');
const artistRouter = require('./routes/artist');
const artistController = require('./controllers/artist');

const app = express();
app.use(express.json());

app.use('/artist', artistRouter);

// app.get('/', (req, res) => {
//   res.status(200).send('Hello World!')
// })

module.exports = app;

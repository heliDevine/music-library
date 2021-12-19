const express = require('express');
const artistRouter = require('./routes/artist');
const artistController = require('./controllers/artist');
// const userRouter = require('./routes/user');

const app = express();
app.use(express.json());

app.use('/artist', artistRouter);

//// do I need following:////

// app.get('/:artistId', artistRouter);
// app.use('/user', userRouter);

// app.get('/', (req, res) => {
//   res.status(200).send('Hello World!')
// })

module.exports = app;

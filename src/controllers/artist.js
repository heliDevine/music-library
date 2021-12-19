const { restart } = require('nodemon');
const { get } = require('../routes/artist');
const getDb = require('../services/db');

exports.create = async (req, res) => {
  const db = await getDb();
  const { name, genre } = req.body;

  try {
    await db.query(`INSERT INTO Artist (name, genre) VALUES (?, ?)`, [name, genre]);

    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500).json(err);
  }
  db.close();
};
// exports.read = (req, res) => {
//   res.sendStatus(201);
// };
exports.read = async (req, res) => {
  const db = await getDb();

  try {
    const [artists] = await db.query('SELECT * FROM Artist');
    res.status(200).json(artists);
  } catch (err) {
    res.status(500).json(err);
  }
  db.close();
};

///// Getting an artist by Id controller function/////

// defining a new GET route which matches path /artist/:artistId. You'll then need to write a controller which uses db.query() to SELECT everything from the artist table WHERE the id matches req.params.artistId.

// There is a gotcha in this challenge, db.query() will single results on an array. To pass the test you will need to remove it from the array before you send the data in the response
// exports.readId = async (req, res) => {
//   const db = await getDb();
//   let id = req.params.id;

//   try {
//     const [artist] = await db.query('SELECT ${id} FROM Artist WHERE :');
//     res.status(200).json(artist.id);
//   } catch (err) {
//     res.status(500).json(err);
//   }
//   db.close();
// };

///// this didn't work/////
// exports.readId = get('/:artistId', (req, res) => {
//   const db = await getDb();
//   let id = req.params.id;

//   try {
//     const [artist] = await db.query('SELECT * FROM Artist WHERE id = ? ');
//     res.status(200).json(artist.id);
//   } catch (err) {
//     res.status(404).json(err);
//   }
//   db.close();
// });

// exports.readId = async (req, res) => {
//   const db = await getDb();
//   let id = req.params.id;

//   try {
//     const [artist] = await db.query('SELECT * FROM Artist WHERE id = ? ');
//     res.status(200).json(artist.id);
//   } catch (err) {
//     res.status(404).json(err);
//   }
//   db.close();
// };

///// solution ///////
exports.readId = async (req, res) => {
  const db = await getDb();
  const { artistId } = req.params;

  const [[artist]] = await db.query('SELECT * FROM Artist WHERE id = ?', [artistId]);

  if (!artist) {
    res.sendStatus(404);
  } else {
    res.status(200).json(artist);
  }

  db.close();
};

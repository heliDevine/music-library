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
///// why my solution doesn't work???? /////
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

///// solution from track, so I can progress....  ///////
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

// THIS is not working...only passes the returns error TEST but artist not in the database

exports.updateArtist = async (req, res) => {
  const db = await getDb();
  const { artistId } = req.params;
  const { data } = req.body;

  try {
    const [[artist]] = await db.query('SELECT * FROM Artist WHERE id = ?', [artistId]);

    if (!artist) {
      res.sendStatus(404);
    } else {
      await db.query('UPDATE Artist SET ? WHERE id = ?', [data, artistId]);
      res.status(200).json(artistId);
    }
  } catch (err) {
    res.sendStatus(500);
  }
  db.close();
};

// THIS is not working...only passes the returns error artist not in the database

exports.deleteArtist = async (req, res) => {
  const db = await getDb();
  const { artistId } = req.params;

  try {
    const [[artist]] = await db.query('SELECT * FROM Artist WHERE id = ?', [artistId]);

    if (!artist) {
      res.sendStatus(404);
    } else {
      await db.query('DELETE FROM Artist WHERE id = ?', [artistId]);
      res.status(200).json(artistId);
    }
  } catch (err) {
    res.sendStatus(500);
  }
  db.close();
};

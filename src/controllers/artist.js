// write a controller function which returns a 201 status code.

// Import your artistRouter into app.js and direct all /artist to your artistController.

// const express = require('express')
// const artist = (req, res) => {
//   res.status(201).send('/artist')
// }

// module.exports = artist

exports.create = (req, res) => {
  res.sendStatus(201)
}

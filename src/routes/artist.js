// Import your controller function  into this  src/routes/artist.js router and define a POST / route to connect to your controller.

const express = require('express')
const artistController = require('../controllers/artist')
const router = express.Router()
router.post('/', artistController.create)

module.exports = router

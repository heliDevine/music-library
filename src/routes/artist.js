const express = require('express');
const artistController = require('../controllers/artist');
const router = express.Router();

router.post('/', artistController.create);
router.get('/', artistController.read);
router.get('/:artistId', artistController.readId);
router.patch('/', artistController.updateArtist);
router.get('/', artistController.deleteArtist);
module.exports = router;

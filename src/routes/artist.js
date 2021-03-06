const express = require('express');
const artistController = require('../controllers/artist');
const router = express.Router();

router.post('/', artistController.create);
router.get('/', artistController.read);
router.get('/:artistId', artistController.readId);
router.patch('/:artistId', artistController.updateArtist);
router.delete('/:artistId', artistController.deleteArtist);
module.exports = router;

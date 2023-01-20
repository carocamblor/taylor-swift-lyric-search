var express = require('express');
var router = express.Router();
var songsController = require('../controllers/songsController'); 

router.post('/:id/comment', songsController.comment);

router.get('/:id', songsController.detail);

module.exports = router;
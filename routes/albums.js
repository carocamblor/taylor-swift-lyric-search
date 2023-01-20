var express = require('express');
var router = express.Router();
var albumsController = require('../controllers/albumsController');

router.post('/:id/comment', albumsController.comment);

router.get('/:id', albumsController.detail);

module.exports = router;
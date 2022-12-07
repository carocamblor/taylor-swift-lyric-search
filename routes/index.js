var express = require('express');
var router = express.Router();
var songsController = require('../controllers/songsController'); 
var albumsController = require('../controllers/albumsController'); 

router.get('/', albumsController.list);

router.get('/results', songsController.results);

router.get('/album/:id', albumsController.detail);

router.get('/song/:id', songsController.detail);

module.exports = router;

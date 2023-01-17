var express = require('express');
var router = express.Router();
var songsController = require('../controllers/songsController'); 
var albumsController = require('../controllers/albumsController');
var usersController = require('../controllers/usersController')

router.get('/', albumsController.list);

router.get('/results', songsController.results);

router.get('/album/:id', albumsController.detail);

router.get('/song/:id', songsController.detail);

router.all('/register', usersController.register);

router.all('/login', usersController.login);

router.get('/logout', usersController.logout);

module.exports = router;

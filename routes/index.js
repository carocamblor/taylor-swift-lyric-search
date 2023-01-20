var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

router.get('/', indexController.index);

router.get('/results', indexController.results);

router.all('/register', indexController.register);

router.all('/login', indexController.login);

router.get('/logout', indexController.logout);

module.exports = router;

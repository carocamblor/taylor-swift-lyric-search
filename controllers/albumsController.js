const songs = require('../data/songs');
const albums = require('../data/albums');

var albumsController = {
    list: function (req, res) {
        res.render('index', {albums})
    }
}

module.exports = albumsController;
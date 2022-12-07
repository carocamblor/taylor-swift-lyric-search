const songs = require('../data/songs');
const albums = require('../data/albums');

var albumsController = {
    list: function (req, res) {
        res.render('index', {albums})
    },
    detail: function (req, res) {
        let album = albums.filter((album) => album.title.toLowerCase() == req.params.album)
        res.render('detail', {album})
    },
}

module.exports = albumsController;
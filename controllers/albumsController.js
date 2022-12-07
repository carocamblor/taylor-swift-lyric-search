const songs = require('../data/songs');
const albums = require('../data/albums');

var albumsController = {
    list: function (req, res) {
        res.render('index', {albums})
    },
    detail: function (req, res) {
        let album = albums.filter((album) => album.id == req.params.id)[0]
        res.render('album', {album})
    },
}

module.exports = albumsController;
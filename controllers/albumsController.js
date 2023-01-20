const albums = require('../data/albums');

var albumsController = {
    detail: function (req, res) {

        let album = albums.filter((album) => album.id == req.params.id)[0]

        res.render('album', {album})

    },
}

module.exports = albumsController;
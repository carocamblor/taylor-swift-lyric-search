const songs = require('../data/songs');
const albums = require('../data/albums');
const { signedCookie } = require('cookie-parser');

var songsController = {
    results: function (req, res) {

        let songsR = songs.filter((song) => song.lyrics.some((lyric) => lyric.includes(req.query.search)))
       
        let results = [];

        for (let song of songsR) {
            let lyrics = song.lyrics.filter((lyric) => lyric.includes(req.query.search))
            for (const lyric of lyrics) {
                results.push({
                    song: song,
                    lyrics: lyric,
                    nextLyric: song.lyrics[song.lyrics.indexOf(lyric)+1]
                })
            }
            
        }

        res.render('results', { results, search: req.query.search})
    }
}

module.exports = songsController;
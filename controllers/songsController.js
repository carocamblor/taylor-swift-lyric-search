const songs = require('../data/songs');
const albums = require('../data/albums');
const { signedCookie } = require('cookie-parser');

var songsController = {
    results: function (req, res) {

        let songsR = songs.list.filter((song) => song.lyrics.some((lyric) => lyric.toLowerCase().includes(req.query.search.toLowerCase())))
       
        let results = [];

        for (let song of songsR) {
            let lyrics = song.lyrics.filter((lyric) => lyric.toLowerCase().includes(req.query.search.toLowerCase()))
            for (const lyric of lyrics) {
                results.push({
                    song: song,
                    lyrics: lyric,
                    nextLyric: song.lyrics[song.lyrics.indexOf(lyric)+1]
                })
            }
            
        }

        res.render('results', { results, search: req.query.search})
    },
    detail: function (req, res) {
        let song = songs.list.filter((song) => song.id == req.params.id)[0]
        res.render('song', {song})
    }
}

module.exports = songsController;
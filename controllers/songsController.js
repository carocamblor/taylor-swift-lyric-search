const songs = require('../data/songs');
const albums = require('../data/albums');
const { signedCookie } = require('cookie-parser');
const firebase = require('firebase')
require('firebase/firestore');
const db = firebase.firestore();

var songsController = {
    results: function (req, res) {

        if (!req.query.album) {

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

        } else {

            let albumsSearch = req.query.album

            console.log(albumsSearch)
            
            if (Array.isArray(albumsSearch)) {

                let songsR = songs.findByAlbums(albumsSearch).filter((song) => song.lyrics.some((lyric) => lyric.toLowerCase().includes(req.query.search.toLowerCase())))

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
                res.render('results', { results, search: req.query.search, albums: albumsSearch, length: albumsSearch.length})

            } else {
                
                let albumsSearch = req.query.album

                let songsR = songs.findByAlbum(albumsSearch).filter((song) => song.lyrics.some((lyric) => lyric.toLowerCase().includes(req.query.search.toLowerCase())))
       
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

                res.render('results', { results, search: req.query.search, albums: albumsSearch})
            }

        }

        
    },
    detail: async function (req, res) {

        let song = songs.list.filter((song) => song.id == req.params.id)[0]

        let docs = await db.collection("songsComments").where("songid", "==", req.params.id).get()

        let comments = [];

        docs.forEach(doc => comments.push(doc.data()))

        res.render('song', {song, comments})
    },
    comment: async function (req, res) {

        console.log(firebase.auth().currentUser)

        let docs = await db.collection("users").where("owner", "==", firebase.auth().currentUser.email).get()

        let users = [];

        docs.forEach(doc => users.push(doc.data()))

        db.collection('songsComments').add({
            songid: req.params.id,
            comment: req.body.comment,
            username: users[0].username,
            owner: firebase.auth().currentUser.email,
            createdAt: Date.now()
        })
        
        .then(response => 
            res.redirect(`/song/${req.params.id}`)
        ) // esto va acá o en el then anterior
            
        .catch(e => 
            console.log("Sorry! We weren't able to register your comment :(")
        ) // esto está bien?
        
    }
}

module.exports = songsController;
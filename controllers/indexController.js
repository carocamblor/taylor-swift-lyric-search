const songs = require('../data/songs');
const albums = require('../data/albums');
const firebase = require('firebase')
require('firebase/firestore');
const db = firebase.firestore();

var albumsController = {
    index: (req, res) => {

        res.render('index', {albums})

    },
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
    register: (req, res) => {

        if (req.method == 'GET') {

            let error = false;

            res.render('register', {error});

        } else {

            try {

                const {email, username, password} = req.body;

                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    
                    var user = userCredential.user;

                    db.collection('users').add({
                        username: username,
                        owner: email,
                        createdAt: Date.now()
                    })
                    .then(response => {
                        // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL) --> No funciona en este environment
                        res.redirect('/')
                    })
                    .catch(e => {
                        let error = 'Error while creating user';
                        res.render('register', {error});
                    })

                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(error.message);
                    res.render('register', {error});
                });

            } catch(error) {

                res.redirect('register', {error});

            }

        }

    },
    login: (req, res) => {

        if (req.method == 'GET') {

            let error = false;

            res.render('login', {error});

        } else {

            const {email, password} = req.body;

            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL) --> Doesn't work in this environment :(
                res.redirect('/');
            })
            .catch((error) => {
                res.render('login', {error})
            });
            
        }

    },
    logout: function (req, res) {
        firebase.auth().signOut()
        .then(() => {
            res.redirect('/');
        })
        .catch((error) => {
            // An error happened
        });
    },
    
}

module.exports = albumsController;
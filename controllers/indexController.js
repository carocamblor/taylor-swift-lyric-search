const songs = require('../data/songs');
const albums = require('../data/albums');
const firebase = require('firebase')
require('firebase/firestore');
const db = firebase.firestore();

var albumsController = {
    index: (req, res) => {

        let currentUser = firebase.auth().currentUser;

        res.render('index', {albums, currentUser})

    },
    results: function (req, res) {

        let currentUser = firebase.auth().currentUser;

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
    
            res.render('results', { results, search: req.query.search, currentUser})

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
                res.render('results', { results, search: req.query.search, albums: albumsSearch, length: albumsSearch.length, currentUser})

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

                res.render('results', { results, search: req.query.search, albums: albumsSearch, currentUser})
            }

        }

    },
    register: (req, res) => {

        if (req.method == 'GET') {

            let currentUser = firebase.auth().currentUser;

            let error = false;

            res.render('error', {error, currentUser});

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
                        res.redirect('/')
                    })
                    .catch(e => {
                        let error = 'Error while creating user';
                        res.render('register', {error, currentUser});
                    })

                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(error.message);
                    let currentUser = firebase.auth().currentUser;
                    res.render('register', {error, currentUser});
                });

            } catch(error) {

                let currentUser = firebase.auth().currentUser;
                res.redirect('register', {error, currentUser});

            }

        }

    },
    login: (req, res) => {

        if (req.method == 'GET') {

            let currentUser = firebase.auth().currentUser;

            console.log(currentUser);

            let error = false;

            res.render('login', {error, currentUser});

        } else {

            const {email, password} = req.body;

            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                console.log('SUCCESS LOG IN');
                res.redirect('/');
            })
            .catch((error) => {
                let currentUser = firebase.auth().currentUser;
                console.log(currentUser);
                console.log('ERROR LOG IN');
                res.render('error', {error, currentUser})
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
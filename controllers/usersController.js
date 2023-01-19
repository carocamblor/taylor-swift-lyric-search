const songs = require('../data/songs');
const albums = require('../data/albums');
const firebase = require('firebase')
require('firebase/firestore');
const db = firebase.firestore();

var albumsController = {
    register: async(req, res) => {
        if (req.method == 'GET') {
            res.render('register')
        } else {
            try {
                const {email, username, password} = req.body;
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user);
                db.collection('users').add({
                    username: username,
                    owner: email,
                    createdAt: Date.now()
                })
                
                .then(response => {
                
                    req.session.userLoggedOn = true;

                    res.redirect('/')
                }) // esto va acá o en el then anterior
                    
                
                .catch(e => 
                    console.log('Error while creating user')) // esto está bien?
                })
                .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);
                });
                } catch(e) {
                res.redirect('register');
                console.log(e)
            }
        }
    },
    login: async(req, res) => {
        if (req.method == 'GET') {
            res.render('login')
        } else {
            const {email, password} = req.body;
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                req.session.userLoggedOn = true;

                res.redirect('/');
                firebase.auth().setPersistence(true ? fireauth.Auth.Persistence.LOCAL : fireauth.Auth.Persistence.SESSION)
            })
            .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            });
            
        }
    },
    logout: function (req, res) {
        firebase.auth().signOut().then(() => {
            //locals.currentUser = {}
            req.session.userLoggedOn = false;
            res.redirect('/');
            }).catch((error) => {
            // An error happened.
            });
    },
    
}

module.exports = albumsController;
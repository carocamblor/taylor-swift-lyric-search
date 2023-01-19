const songs = require('../data/songs');
const albums = require('../data/albums');
const firebase = require('firebase')
require('firebase/firestore');
const db = firebase.firestore();

var albumsController = {
    register: (req, res) => {
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
              //  res.cookie('user', true, { maxAge: 1000 * 60 * 60 * 24 * 30 })
                db.collection('users').add({
                    username: username,
                    owner: email,
                    createdAt: Date.now()
                })
                
                .then(response => {
                
                  //  req.session.userLoggedOn = true;
                  //firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
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
    login: (req, res) => {
        if (req.method == 'GET') {
            res.render('login')
        } else {
            const {email, password} = req.body;
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
              //  req.session.userLoggedOn = true;
               // res.cookie('user', true, { maxAge: 1000 * 60 * 60 * 24 * 30 })
             //   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                res.redirect('/');
                
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
           // req.session.userLoggedOn = null;
           // res.clearCookie('user');
            res.redirect('/');
            }).catch((error) => {
            // An error happened.
            });
    },
    
}

module.exports = albumsController;
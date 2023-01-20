const albums = require('../data/albums');
const firebase = require('firebase')
require('firebase/firestore');
const db = firebase.firestore();

var albumsController = {
    detail: async function (req, res) {

        let album = albums.filter((album) => album.id == req.params.id)[0]

        let docs = await db.collection("albumsComments").where("albumid", "==", req.params.id).get()

        let comments = [];

        docs.forEach(doc => comments.push(doc.data()))

        let commentAction = '/album/'+album.id+'/comment';

        res.render('album', {album, comments, commentAction})

    },
    comment: async function (req, res) {

        let docs = await db.collection("users").where("owner", "==", firebase.auth().currentUser.email).get()

        let users = [];

        docs.forEach(doc => users.push(doc.data()))

        db.collection('albumsComments').add({
            albumid: req.params.id,
            comment: req.body.comment,
            username: users[0].username,
            owner: firebase.auth().currentUser.email,
            createdAt: Date.now()
        })
        .then(response => 
            res.redirect(`/album/${req.params.id}`)
        )     
        .catch(e => 
            console.log("Sorry! We weren't able to register your comment :(")
        )
        
    }
}

module.exports = albumsController;
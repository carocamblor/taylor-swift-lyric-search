const songs = require('../data/songs');
const albums = require('../data/albums');
// const { signedCookie } = require('cookie-parser');
const firebase = require('firebase')
require('firebase/firestore');
const db = firebase.firestore();

var songsController = {
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
        )     
        .catch(e => 
            console.log("Sorry! We weren't able to register your comment :(")
        )
        
    }
}

module.exports = songsController;
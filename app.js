var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyCIa8W5aaLTR6ONgaTHC_SxisDd2ZVftqw",
  authDomain: "taylor-swift-reviews.firebaseapp.com",
  projectId: "taylor-swift-reviews",
  storageBucket: "taylor-swift-reviews.appspot.com",
  messagingSenderId: "778688200720",
  appId: "1:778688200720:web:d30b3d425228c3c922ca95"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var indexRouter = require('./routes/index');
var albumsRouter = require('./routes/albums');
var songsRouter = require('./routes/songs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(async (req, res, next) => {

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('SIIIIIIIIIIIII')
    } else {
      console.log('NOOOOOOOOOOOOOO')
    }
  })

  let currentUser = await firebase.auth().currentUser;
  
  if (currentUser) {
    console.log('The user is logged in')
  } else {
    console.log('The user is NOT logged in')
  }

  res.locals.currentUser = currentUser;

  next();

})


app.use('/', indexRouter);
app.use('/song', songsRouter);
app.use('/album', albumsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

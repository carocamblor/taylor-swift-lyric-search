var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

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

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use( //configuracion de session. Nos agreega la variable req.session
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    name: 'cookie',
    cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    sameSite: 'none',
    httpOnly: true,
    },
  }),
);


/* app.use( async (req, res, next) => {
  let currentUser = await firebase.auth().currentUser
  await firebase.auth().onAuthStateChanged(function(user) {
    if (user || currentUser) {
     // let user = firebase.auth().currentUser;
      res.locals.loggedIn = true;
    } else {
      res.locals.loggedIn = false;
    }
  });
 
  next();

}) */

/*app.use(async (req, res, next) => {
  console.log(req.cookies.user)
  if (req.cookies.user) {
    console.log(req.cookies.user)
    console.log('holaa')
    res.locals.loggedIn = true;
  }
  next();
})*/

app.use(async (req, res, next) => {

  let currentUser = await firebase.auth().currentUser;

  if (currentUser) {
    console.log('EL USUARIO ESTA LOGUEADOOO')
  } else {
    console.log('EL USUARIO NOOOOOOOOO ESTA LOGUEADOOO')
  }

  res.locals.currentUser = currentUser;

  next();
})

/* 
app.use( (req, res, next) => { //Middleware de Session. Poner en vistas

  if (req.session.userLoggedOn) {

    res.locals.userLoggedOn = true; //res.locals es varible que se comparte con las vistas
  }
  //res.locals.userLoggedOn = req.session.userLoggedOn;
  next();
});

*/

app.use('/', indexRouter);

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

// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var session        = require('express-session')
var mongoose       = require('mongoose');
var fs             = require('fs');
var passport       = require('passport');
// configuration ===========================================
    
// config files
var db = require('./config/db');

mongoose.connect(db.url); 
var dbConn = mongoose.connection;
dbConn.on('error', console.error.bind(console, 'connection error:'));
dbConn.once('open', function() {
  console.log("Connection to DB open!")
});

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 

// app.set('trust proxy', 1) // trust that the https is used
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'aIIaiaqSK9NePubAn4YQ%9DoHafNClYq683eu4CStV@*--/uWD56ebjdVcHKfmEM9K7 ', 
  cookie: { 
    maxAge: 20*60*1000, // 60 minutes
    // secure: true
  }
}))
app.use(passport.initialize()); // Add passport initialization
app.use(passport.session());    // Add passport initialization


require('./app/routes')(app);

var port = process.env.PORT || 8080; 
app.listen(port);        

// shoutout to the user                     
console.log('Magic happens at localhost:' + port);

// expose app           
exports = module.exports = app;    


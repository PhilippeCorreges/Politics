var express = require('express');
var bodyParser = require ('body-parser');

var path = require('path');
var index = require('./routes/index');
var tweets = require('./routes/tweets');
var app = express();

// serve static assets from the public directory
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// look for view html in the views directory
app.set('views', path.join(__dirname, '/public/'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// setup routes
app.use('/', index);
app.use('/tweets', tweets);


module.exports = app;

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log('Listening on ' + port);
});
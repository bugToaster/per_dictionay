const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect("mongodb://anjan_per_dictionary:SLenVeadpierWe2@ds125198.mlab.com:25198/per_dictionary");
const db = mongoose.connection;

db.on('error',function (err) {
    console.log(err);
});

db.once('open',function() {
    console.log("We are connected");
});

const htmlController = require('./controllers/htmlController');

const port = process.env.PORT || 3000;
const app = express();

app.use('/assets', express.static(__dirname + '/public'));
app.use('/assets/js', express.static(__dirname + '/node_modules/twitter-bootstrap-3.0.0/dist/js'));
app.use('/assets/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/assets/css', express.static(__dirname + '/node_modules/twitter-bootstrap-3.0.0/dist/css'));
app.use('/assets/css', express.static(__dirname + '/node_modules/font-awesome/css'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    // console.log('Request Url:' + req.url);
    next();
});

htmlController(app);

app.listen(port);

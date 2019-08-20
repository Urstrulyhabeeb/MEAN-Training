var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = 8080;


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1/studentdb', { useNewUrlParser: true}, function(err) {
    if (err) console.log(err);
    else console.log('DB connected');
});

 require('./app/route')(app); // pass our application into our routes

app.listen(port, function() {
    console.log("App Run Successfully" , port);
});
 exports = module.exports = app;
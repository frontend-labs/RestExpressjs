var express, app, mongoose, db, Footballer;

express = require('express');
app = express();
mongoose = require('mongoose');
require('../data/footballer.js')();

mongoose.connect('mongodb://localhost/footballerApp');
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	Footballer = mongoose.model('Footballer');
});


app.get('/',function(request, response){
	response.send('Footballer API');
});

app.get('/search/:text',function(request, response){
    Footballer.find({ name: request.params.text }, function(error, footballer){
        if(error){
            response.json(error);
        }
        else if(footballer == null){
            response.json('no such user!');
        }
        else{
			response.json(footballer);
        }
    });
});

app.listen('4000',function(){
	console.log('Server Rest Start');
});


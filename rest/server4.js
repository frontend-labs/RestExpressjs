var express, app, cjson, dataIdCollection, countryCollection, search;

express = require('express');
app = express();
cjson = require('cjson');
search = require('./routes/search');

dataIdCollection = cjson.load('./dummy/dataIdCollection.json');
countryCollection = cjson.load('./dummy/countryCollection.json'); 

app.use(express.static('public'));

app.get('/',function(request, response){
	response.data('hola');
});

app.use('/search', search);

app.param('name',function(request,response, next){
    var name = request.params.name;
    name = name.toLowerCase();
    request.nameParam = name;
    next();
});

app.get('/footballer/:id',function(request, response){
    response.json(dataIdCollection[request.params.id]);
});

app.get('/country/',function(request, response){
    response.json(Object.keys(countryCollection));
});

app.get('/country/:name',function(request, response){
    var countryData = countryCollection[request.nameParam];
    if(!countryData){
        response.status(404).json('No encontramos al jugador '+ request.params.name);
    }else{
        response.json(countryData);
    }
});


app.listen('4000',function(){
	console.log('Server4 Rest Start');
});


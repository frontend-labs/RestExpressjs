var express, app, cjson, dataNameCollection, bodyParser, dataIdCollection, countryCollection, parseUrlencoded;

express = require('express');
app = express();
bodyParser = require('body-parser');
cjson = require('cjson');
parseUrlencoded = bodyParser.urlencoded({ extended: false });

dataNameCollection =  cjson.load('./dummy/dataNameCollection.json');
dataIdCollection = cjson.load('./dummy/dataIdCollection.json');
countryCollection = cjson.load('./dummy/countryCollection.json');


app.get('/',function(request, response){
	response.json(data);
});

app.param('name',function(request,response, next){
    var name = request.params.name;
    name = name.toLowerCase();
    request.nameParam = name;
    next();
});

app.get('/search/:name',function(request, response){

    var footballerData = dataNameCollection[request.nameParam];
    if(!footballerData){
        response.status(404).json('No encontramos al jugador '+ request.params.name);
    }else{
        response.json(footballerData);
    }
});

app.delete('/search/:name', function(request, response){
    delete dataNameCollection[request.nameParam];
    response.sendStatus(200);
});

app.post('/search',parseUrlencoded, function(request, response){
    var block = request.body;
    response.status(201).json(block.name);
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
        response.status(404).json('No encontramos el pais '+ request.params.name);
    }else{
        response.json(countryData);
    }
});


app.listen('4000',function(){
	console.log('Server2 Rest Start');
});


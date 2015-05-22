var express, app, cjson, dataNameCollection, dataIdCollection, countryCollection, bodyParser, parseUrlencoded;

express = require('express');
app = express();
bodyParser = require('body-parser');
cjson = require('cjson');
parseUrlencoded = bodyParser.urlencoded({ extended: false });

dataNameCollection =  cjson.load('./dummy/dataNameCollection.json');
dataIdCollection = cjson.load('./dummy/dataIdCollection.json');
countryCollection = cjson.load('./dummy/countryCollection.json');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',function(request, response){
    response.send('hola');
});

app.get('/search',function(request, response){
	response.json(dataNameCollection);
});

app.post('/search',parseUrlencoded, function(request, response){
    var block = request.body;
    response.status(201).json(block.name);
});

app.get('/search/:name',function(request, response){
    var name = request.params.name;
    name = name.toLowerCase();
    var footballerData = dataNameCollection[name];
    if(!footballerData){
        response.status(404).json('No encontramos al jugador '+ request.params.name);
    }else{
        response.json(footballerData);
    }
});

app.delete('/search/:name', function(request, response){
    var name = request.params.name;
    name = name.toLowerCase();    
    delete dataNameCollection[name];
    response.sendStatus(200);
});


app.get('/footballer/:id',function(request, response){
    response.json(dataIdCollection[request.params.id]);
});

app.get('/country/',function(request, response){
    response.json(Object.keys(countryCollection));
});

app.get('/country/:name',function(request, response){
    var name = request.params.name;
    name = name.toLowerCase();
    var countryData = countryCollection[name];
    if(!countryData){
        response.status(404).json('No encontramos el pais '+ request.params.name);
    }else{
        response.json(countryData);
    }
});


app.listen('4000',function(){
	console.log('Server Rest Start');
});


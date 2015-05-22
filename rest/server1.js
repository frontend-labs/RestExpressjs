var express, app, dataNameCollection, dataIdCollection, countryCollection, bodyParser, parseUrlencoded;

express = require('express');
app = express();
bodyParser = require('body-parser');
parseUrlencoded = bodyParser.urlencoded({ extended: false });

dataNameCollection = {
    'dummy' : {
        'id' : '000',
        'name' : 'dummy name',
        'surname' : 'dummy surname'        
    },
    'messi' : {
        'id' : '001',
        'name' : 'messi',
        'surname' : 'leonel'
    },
    'paolo': {
        'id' : '002',        
        'name' : 'paolo',
        'surname' : 'guerrero'      
    },
    'neymar': {
        'id' : '003',        
        'name' : 'neymar',
        'surname' : 'da Silva'       
    },
    'luis': {
        'id' : '004',        
        'name' : 'luis',
        'surname' : 'suarez'        
    },
    'jeferson': {
        'id' : '005',
        'name': 'jeferson',
        'surname' : 'farfan'
    }   
}

dataIdCollection = {
   '001'  : {
        'id' : '001',
        'name' : 'messi',
        'surname' : 'leonel',
        'size' : '177 cm',
        'weight' : '70 kg',
        'country' : 'argentina'
   },
    '002': {
        'id' : '002',        
        'name' : 'paolo',
        'surname' : 'guerrero',
        'size' : '177 cm',
        'weight' : '78 kg',
        'country' : 'peru'        
    },
    '003': {
        'id' : '003',        
        'name' : 'neymar',
        'surname' : 'da Silva',
        'size' : '171 cm',
        'weight' : '73 kg',
        'country' : 'brasil'        
    },
    '004': {
        'id' : '004',        
        'name' : 'luis',
        'surname' : 'suarez',
        'size' : '170 cm',
        'weight' : '71 kg',
        'country' : 'uruguay'        
    },
    '005': {
        'id' : '005',        
        'name' : 'jeferson',
        'surname' : 'farfan',
        'size' : '174 cm',
        'weight' : '68 kg',
        'country' : 'peru'        
    }, 
}

countryCollection = {
    'peru' : [
        {
            'id' : '002',        
            'name' : 'paolo',
            'surname' : 'guerrero',
            'size' : '177 cm',
            'weight' : '78 kg'
        },
        {
            'id' : '005',        
            'name' : 'jeferson',
            'surname' : 'farfan',
            'size' : '174 cm',
            'weight' : '68 kg'
        }
    ],
    'argentina' : [
        {
            'id' : '001',
            'name' : 'messi',
            'surname' : 'leonel',
            'size' : '177 cm',
            'weight' : '70 kg'
        }
    ],
    'uruguay' : [
        {
            'id' : '004',        
            'name' : 'luis',
            'surname' : 'suarez',
            'size' : '170 cm',
            'weight' : '71 kg'
        }
    ],
    'brasil' : [
        {
            'id' : '003',        
            'name' : 'neymar',
            'surname' : 'da Silva',
            'size' : '171 cm',
            'weight' : '73 kg'
        }
    ]
} 

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


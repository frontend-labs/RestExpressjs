var express, app, dataIdCollection, countryCollection, search;

express = require('express');
app = express();
search = require('./routes/search');

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
        'id' : '004',        
        'name' : 'luis',
        'surname' : 'suarez',
        'size' : '170 cm',
        'weight' : '71 kg'
    ],
    'brasil' : [
        'id' : '003',        
        'name' : 'neymar',
        'surname' : 'da Silva',
        'size' : '171 cm',
        'weight' : '73 kg'
    ]
} 

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
    response.json(countryCollection[request.params.id]);
});

app.get('/country/',function(request, response){
    response.json(Object.keys(countryCollection));
});

app.get('/country/:name',function(request, response){
    var countryData = dataIdCollection[request.nameParam];
    if(!countryData){
        response.status(404).json('No encontramos al jugador '+ request.params.name);
    }else{
        response.json(countryData);
    }
});


app.listen('4000',function(){
	console.log('Server Rest Start');
});


var express, bodyParser, parseUrlencoded, router, dataNameCollection;

express = require('express');
router = express.Router();
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

router.route('/')
    .get(function(request, response){
        response.json(dataNameCollection);
    });
    .post(parseUrlencoded, function(request, response){
        var block = request.body;
        response.status(201).json(block.name);
    });

router.route('/:name')
    .all(function(request,response, next){
        var name = request.params.name;
        name = name.toLowerCase();
        request.nameParam = name;
        next();
    });
    .get(function(request, response){
        var footballerData = dataNameCollection[request.nameParam];
        if(!footballerData){
            response.status(404).json('No encontramos al jugador '+ request.params.name);
        }else{
            response.json(footballerData);
        }
    });
    .delete(function(request, response){
        delete dataNameCollection[request.nameParam];
        response.sendStatus(200);
    });

module.exports = router;

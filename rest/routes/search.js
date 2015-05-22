var express, bodyParser, cjson, parseUrlencoded, router, dataNameCollection;

express = require('express');
router = express.Router();
bodyParser = require('body-parser');
cjson = require('cjson');
parseUrlencoded = bodyParser.urlencoded({ extended: false });

dataNameCollection =  cjson.load('./dummy/dataNameCollection.json');

router.route('/')
    .get(function(request, response){
        response.json(dataNameCollection);
    })
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
    })
    .get(function(request, response){
        var footballerData = dataNameCollection[request.nameParam];
        if(!footballerData){
            response.status(404).json('No encontramos al jugador '+ request.params.name);
        }else{
            response.json(footballerData);
        }
    })
    .delete(function(request, response){
        delete dataNameCollection[request.nameParam];
        response.sendStatus(200);
    });

module.exports = router;

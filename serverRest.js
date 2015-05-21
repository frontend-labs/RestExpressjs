var express, app, data;
	express = require('express');
	app = express();

data = {
	'001' : {
		id : '001',
		name : 'erik fernando',
		surname : 'flores quispe'
	},
	'002' : {
		id : '002',
		name : 'norma gladys',
		surname : 'quispe valerio'
	}
};

app.get('/search',function(response,request){
	response.send('hola');
});

app.listen('4000',function(){
	console.log('Server Rest Start');
});


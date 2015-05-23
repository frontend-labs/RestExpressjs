express = require('express');
app = express();

app.get('/',function(request, response){
	response.send('raiz');
});

app.get('/saludo/:nombre',function(request, response){
	//response.json('{"1": "hola"}');
	var nombre = request.params.nombre;
	response.send('hola '+ nombre);
});

app.listen(3535,function(){
	console.log(':D');
});
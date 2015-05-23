# Footballer App
Este es un ejemplo de como implementar un REST

Para este ejemplo se uso como base para la estructura del proyecto un [skeletor](https://github.com/erikfloresq/skeletor)

Para inicializar el proyecto se tiene que llamar a las dependencias de bower y npm mediante el terminal en la raiz del proyecto o donde se encuentra el bower.json o el package.json

Instalando las librerias de bower
$ bower install bower

Instalando los modulos npm
$ sudo npm install

Tienes que tener un poco de conocimientos sobre preprocesadores (jade/html, stylus/css, coffeeScript/js)
Los archivos base se encuentran en la carpeta app/precom

Para inicializar el proyecto y tendras que revizar todas la tareas que se han armado en el archivo gulpfile.js

# Iniciando el proyecto

La tarea para inicializar el proyecto se ejecuta mediante
$ gulp
La tarea para inicializar el servidor web
$ gulp serve
Una vez ejecutado el comando anterior se abrira una pestaña con la url http://localhost:3000 donde estara corriendo nuestra aplicacion

# Compilacion de Preprocesadores

En este archivo veremos las tareas configuradas para la compilacion de los archivos en jade, stylus y coffee
- Para compilar la tarea de jade se tiene que ejecutar
$ gulp jade
- Para compilar la tarea de stylus se tiene que ejecutar
$ gulp stylus
- Para compilar la tarea de coffee se tiene que ejecutar
$ gulp coffee
- Para compilar las tres tareas se tiene que ejecutar
$ gulp


Si deseas entender con mas profundida gulpjs, te recomiendo que leas el [siguiente post](http://frontendlabs.io/1669--gulp-js-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos).

Para conocer un poco mas sobre jade, te recomiendo el siguiente [post](http://frontendlabs.io/70--jade-language-node-template-engine-and-html-preprocessor)

# REST
Para el ejemplo usaremos un rest local
las Url son:

http://localhost:4000/search/
- Metodos: GET / POST

http://localhost:4000/search/:name 
- Metodos: DELETE / GET

http://localhost:4000/footballer/:id
- Metodos: GET

http://localhost:4000/country/
- Metodos: GET

http://localhost:4000/country/:name
- Metodos: GET



# Tips
- No te olvides de ignorar la carpeta bower_components y node_modules para no estar cargando todas las librerias.

# Links
- [jade](http://jade-lang.com/)
- [stylus](http://learnboost.github.io/stylus/)
- [coffee](http://coffeescript.org/)
- [expressjs](http://expressjs.com/)
- [bootstrap](http://getbootstrap.com/)
- [mongodb driver nodejs](http://docs.mongodb.org/ecosystem/drivers/node-js/)
- [mongoose](https://github.com/Automattic/mongoose)
- [robomongo](http://robomongo.org/)
- [instalar mongodb en mac](http://www.mkyong.com/mongodb/how-to-install-mongodb-on-mac-os-x/)
- [probar el REST con Postman](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm/related)

# Gulp devTools
npm install -g gulp-devtools

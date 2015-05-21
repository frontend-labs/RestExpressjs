# Example Rest Expressjs
Este es un ejemplo de como desarrollar un REST con expressjs

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


# Tips
- No te olvides de ignorar la carpeta bower_components y node_modules para no estar cargando todas las librerias.

# Links
- [jade](http://jade-lang.com/)
- [stylus](http://learnboost.github.io/stylus/)
- [coffee](http://coffeescript.org/)
- [expressjs](http://expressjs.com/)
- [bootstrap](http://getbootstrap.com/)


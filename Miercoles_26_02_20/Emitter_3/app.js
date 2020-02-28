const EventEmitter = require('events');//MAndamos a llamar modulos de node
const util = require('util');//Tambien mandamos a llamar modulos de note

function Greetr() { // Creamos una funcion que tenga un saludo y nos diga hola mundo
    this.greeting = 'Hola mundo' 
}

util.inherits(Greetr, EventEmitter);//Greetr va a heredar el comportamiento de EventEmitter, es decir, que Greetr sera un emiso rde eventos 

//LE aumentamos la funcionalidad a Greetr para que tenga una nueva funcion
Greetr.prototype.greet = function () {
    console.log(this.greeting);
}
//saca lo que hay haya arriva en el evento y mandalo al emisor de eventos
Greetr.prototype.greet = function (data) {//Agregamos un parametro en este caso data que mostrara el nombre
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data)// LE decimos que emita data tambien con el metodo emit, es decir, se envia en el emisor de eventos
}
//Creamos un nuevo greetr para que haga otra cosa
var greeter1 = new Greetr();
//Metemos con el metodo ON, a greeter1  una funtion que haga un nuevo saludo, ya que el emisor siempre esta vacio y con ON le metemos algo que haga algo en este caso nuevamente saludar
greeter1.on('greet', function (data) {
    console.log('someone greeted!' + data);
});
//MAndamos a llamar la funcion greet 
greeter1.greet('Tony');//Le enviamos el parametro de la forma tradicional


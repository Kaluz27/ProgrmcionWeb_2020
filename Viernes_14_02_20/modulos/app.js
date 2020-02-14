var greet = require('./greet');
greet();



var greet2 = require('./greetDos').greet;
greet2();



var greet3 = require('./greetTres');
//Para acceder a los atriutos o metodos de un objeto necesito la notación del . porque greet regresa un objeto construido
greet3.greet();


// aqui mcmabiamos la key de greeting y le ponemos otro valor
greet3.greeting = 'Changed hello word';

// Aqui se demuestra como se hace un cambio cuando tu modificas valores dentro de las keys no importa cuantas veces lo mandes a llamar una vez lo modificas queda cambiado

var greet3b = require('./greetTres');
greet3b.greet();

// Aqui lo que hacemos es declarrar la clase en una variable y accedemos en mediante la notación del '.' y este regresa un constructor
var Greet4 = require('./greetCuatro');
var grtr = new Greet4();

grtr.greetModulo();
// Para que no te cause un problema debes llamar tu modulo el cual vayas a llamar de la misma manera que lo llamaste en el aricho que extraes en este caso greet4.js
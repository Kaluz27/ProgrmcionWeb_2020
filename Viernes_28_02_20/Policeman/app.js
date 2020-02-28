const util = require('util');//Mandamos a llamar modeulos de util que se encuentra en alguna parte de node
function Person() {//Declaramos una clase Persona
    this._firtsName = 'John';
    this._lastName = 'Doe'
}

Person.prototype.greet = function () { // Vamos al prototipo de la Clase y declaramos greet función que mostrara en consola un saludo
    console.log(`Hola ${this._firtsName} ${this._lastName} ${this._badgeNumber}`);
}

function PoliceMan() { // Declarmos otra clase con un numero
    
    Person.call(this); //Lo que pasa aquí es que mandamos a llamar el constructo this de la clase Person
    this._badgeNumber = '1234';
}

util.inherits(PoliceMan, Person);// Invocamos las clases para ver si jala 
//Lo que hace inherits es crear un prototipo entre clases en este caso entre Policeman y Person para generar la relación 

var officer = new PoliceMan();
officer.greet();

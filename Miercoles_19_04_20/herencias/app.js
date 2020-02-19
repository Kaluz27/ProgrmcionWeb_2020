function Person(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
}


// Aqui esta agregando funcionalidad o le esta agregando propiedades a prototype
Person.prototype.greet = function() {
        console.log( `Hola ${this._firstName} ${this._lastName}`);
}

// Estoy agregando a un persona en la clase Person
var Eduardo = new Person('Eduardo','Luna Hernández');
console.log(Eduardo._firstName);
console.log(Eduardo._lastName);

//Invoco la función que esta en el prototype 
Eduardo.greet();

// Estoy agregando a un persona en la clase Person
var Teresa = new Person('Teresa del Carmen','Corona Ayerdi');
console.log(Teresa._firstName);
console.log(Teresa._lastName);

//Invoco la función que esta en el prototype 
Teresa.greet();
'use strict'
const util = require('util');

class Person{
    constructor(){
        this.firtsName = 'John';
        this.lastName = 'Doe';
    }
}

class PoliceMan extends Person {
    constructor(){
        super()
        this._badgeNumber = '1234';
    }
    greet(){ 
        console.log(`Hola ${this.firtsName} ${this.lastName} ${this._badgeNumber}`);
    }
}

var officer = new PoliceMan();
officer.greet();
const random = require('number-random');
const request = require('request');
const convert = require('fahrenheit-to-celsius');
const address = require('./address');


let randomNumber = random(1, 100); // numero aleatorio 1 a 100
let calle = random(1,20) // numero aleatorio de 1 a 20

console.log(randomNumber); //Mostramos numero aleatorio 1-100
//console.log(calle) // Mstramos numero alearotio 1-20
const url = `https://swapi.co/api/people/${randomNumber}/`; // Appi de starwars

const urlt =  `http://www.mapquestapi.com/geocoding/v1/address?key=MAI8u5iGJQqxP1dIuCA0QpRO7KoyZ2XT&location= ${address[calle]}`


request({url: url, json: true},(error, response) =>{
    console.log(response.body);
    console.log(`Name ${response.body.name}`);

    request({url:urlt, jason:true}, (error, response) =>{
        console.log(response.body.results[locations]);
    })
    

})

//console.log(address[calle].address.street);

//Funtion statement
/*let greet = () => {
    console.log('hi');
}
greet();

//funtion are firt-class
/*let longGreeting = (fn) =>{
fn()
}
longGreeting();

//Funtion expression on the fly

let longGreeting=(() => {console.log('Hi')} );
longGreeting()
*/
// ----------------------------------------------------------------------------------------------------------------------------
// Decalaracion de funciones

// function greet(){
//     console.log('hi');
// }
// greet();


// Declaracion de funcion (arrow -> fuction)

// let greet = () => {
//     console.log('Hi');
// }
// greet();


// Declaracion de funcion 

// logGreeting(greet);

// function logGreeting(fn){
//     fn();
// }

// function greet(){
//     console.log('hi');
// }

// string literals

// let hola = (() => {
//     console.log("hello")
// });
// console.log(`${hola} corazon como estas?`)


// Declaracion de funciones nivel 4 

// function greet(){
//     console.log('hi');
// }

// function logGreeting(fn){
//     fn();
// }

// let logGreeting = (fn) => {
//     fn();
// }

// let logGreeting = fn => fn();

// logGreeting(greet);


// functions expressions on the fly

let logGreeting = (() => {
    console.log('Hi');
});

logGreeting();
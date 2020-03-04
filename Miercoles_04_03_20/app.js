setTimeout(() => {
    console.log('Hola 1');//este tiene un timeout y entra al eventloop asi que tiene un entra en una pila 
}, 4000);
setTimeout(() => {
    console.log('Hola 2');//Edte a pesar de que tenga 0 y en teoria deberia entrar al instante pero no, como tiene 0 entra al eventloop y se tiene que esperar
}, 0);

console.log('hola 3'); // Esta se proyecta primero porque no accede al eventloop va directo 


//OTRO EJEMPLO

function greet(callback) {
    console.log('Efe')
    callback()
}

greet(function() {
    console.log('Hola')
})

greet(function() {
    console.log('GG');
})
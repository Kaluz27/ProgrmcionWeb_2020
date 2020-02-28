const Emitter = require('events');
const eventConfig = require('./config').events;//estamos requieriendo los eventes de config que vamos a usar 

var emtr = new Emitter();

//No se que pasa xD supongo que lo mismo de abajo xD 
// Aqui volvemos a lllamar la configuración en config
emtr.on(eventConfig.GREET, () => {
    console.log('Hola desde algun lugar');
});

// Declaramos que tendra greet para posteriormente invocarlo

// eventConfig sustituye a greet y asi evitamos los errores de dedo, este lo mandamos a llamar desde el modulo config
emtr.on(eventConfig.GREET, () => {
    console.log('Un saludo ocurre');
})

console.log('Hello!');
// Aqui invocamos greet el cual estabamos metiendo al array
emtr.emit('greet');
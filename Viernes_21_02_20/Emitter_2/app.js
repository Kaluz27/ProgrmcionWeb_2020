var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function () {
    console.log('Hola desde algun lugar');
});

emtr.on('greet', function () {
console.log('Un saludo ocurre');    
})

console.log('Hello!');

emtr.emit('greet');
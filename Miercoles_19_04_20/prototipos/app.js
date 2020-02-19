// JS es un lenguaje destinado a eventos.

//webserver tiene un emisor de eventos y cuando tienes Express usas este example:

/*
let app = express();

app.get('/users', (res, req) =>{ -- cuando alguien haga una petición en user (que es una ruta), se ejecutara lo que estan en la función siempre y cuando se haga una petico+on en el puerto 3000
    res.send('hola');
}

app.listen(3000); -- Esta corriendo en el puerto 3000 y a la espera de que hagan un req y lo que va a mostrar en la carpeta users será hola

*/ 

//object prototipies and methods
var obj = {
    greet : 'Hello, Eduardo',
    saludo : function() {
        console.log('Buenos días')
    }
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';         //es intereante porque con una variable podemos entrar a cualquier key del objeto
console.log(obj[prop]);
 
var saludo = 'saludo';//En este caso llamo la key saludo
obj[saludo](); // incodo la función para qu me muestre algo


// declaramos un array llamado a
var a = [];
 
// le mandamos unas funciones para que nos muestren algo aun no hace nada
a.push(() =>{console.log('Hola')});
a.push(() =>{console.log('Eduardo')});
a.push(() =>{console.log('¿Cómo estas?')});
a.push(() =>{console.log('a bueno')});

// iteramos el array en este caso a
a.forEach((item)=>{item()});


//herencia prototipada

// todo en js es un objeto, es decir cada objeto apunta a un prototipo, es todo anidado ya que ese prototipo puede tener metodos y sus propias y puedo apuntar a cada uno por medio del punto.




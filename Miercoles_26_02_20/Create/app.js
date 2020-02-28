
//Creamos un objeto en este caso person con sus keys y en el greet ponemos una función que regrese un saludo

//Creamos funciones a partir de un objetc literal
var person = {
    firstName: '',
    lastName: '',
    greet: function () {
        return `Hola buenos días, ${this.firstName} ${this.lastName}`
    }
}
//En este caso utilizamos Object.create lo que hace es invocar el objeto person y crear uno con los datos que nosotros necesitamos
var eduardo = Object.create(person);
eduardo.firstName = 'Eduardo';
eduardo.lastName = 'Luna';
//Hicimos lo mismo para jane 
var jane = Object.create(person);

// Aqui metemos a los atributos valores 
jane.firstName = 'Jane';
jane.lastName = 'Doe';

//Mostramos en la console lo que sale de eduardo y nos mostrara el saludo que tiene greet en el objeto como key y muestra lo que esta en Eduardo
console.log(eduardo.greet());
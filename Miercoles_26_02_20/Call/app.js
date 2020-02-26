var obj = {//definimos un objeto
    name: 'John Doe',
    greet: function (param1) {
        console.log(`Hola ${this.name} ${param1}`)
    }

}
var param1 = 'si jalo'
obj.greet(param1);// lo mandamos a llamar normal
obj.greet.call({name: 'Jane Doe'}, param1); // Aqui mandamos a llamar el objeto pero sobre escribimos el valor de lal parametro name y le vale si tenia antes

//Aqui como no mandamos parametro marcara undefined
obj.greet();//Podemos ver aue el valor nos e borra y lo sobre escribe 

obj.greet.apply({name: 'Jane Doe'}, [param1])
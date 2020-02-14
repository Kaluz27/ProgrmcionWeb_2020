function Greetr() {
    this.greeting = 'Eduardo una vez más te saludo :)';
    this.greet = () => console.log(this.greeting);
}

module.exports= new Greetr();
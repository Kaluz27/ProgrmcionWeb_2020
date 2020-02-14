function Greetr() {
    this.greeting = 'Helo word!!';
    this.greetModulo = () => console.log(this.greeting);
}

module.exports = Greetr
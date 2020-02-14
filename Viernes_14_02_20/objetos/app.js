var person = {
    firtsName : 'Eduardo',
    lastName:'Luna',
    greed : function () {
        console.log(`Helo, ${this.firtsName} ${this.lastName}`)
    }
}

person.greed();

console.log(person['firtsName']);
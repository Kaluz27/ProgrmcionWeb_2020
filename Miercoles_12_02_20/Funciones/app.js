//Funtion statement
let greet = () => {
    console.log('hi');
}
greet();

//funtion are firt-class
let longGreeting = (fn) =>{
fn()
}
longGreeting();

//Funtion expression on the fly

longGreeting=(() => {console.log('Hi')} );

// global execution context

var a=10;

function A(){
    function B(){
        console.log('function B is called')
    }
    B();
    console.log('function A is called')
}
A();
console.log(a);


// function passed as argument is known as call back 

function name(name,gateAge){
    console.log(`ny name is ${name} and I am ${getAge()} years old`)
}
const getAge= function (){
    return 23;
}
name('ravi',getAge)
"use strict";
// FUNCTION SIGNATURES
/* let greet: Function

()=>{

} */ // that's a function signature, with no parameters
// example 1 
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
}; // typescript enfers that we are returning void in that case, because we don't actually return anything
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};

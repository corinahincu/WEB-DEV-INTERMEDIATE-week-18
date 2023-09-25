// explicit types
var character;
var age;
var isLoggedIn;
//age: 'luigi'
age = 30;
isLoggedIn = true;
// arrays
var ninjas = []; // it's suggested to initialize with empty array, like in this example, because, in case we add for ex. ninjas.push('shaun'), we will not have an error in console, because in that case, if we will not declare an empty array, we don't declare nici un array,si ca si cum, we just inform, that in the future it will be string,but none array is declared
ninjas = ['yoshi', 'mario'];
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// if we write the type in front of an array, we write it in parethesis, but if not, then without
//objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColour: 'black'
};

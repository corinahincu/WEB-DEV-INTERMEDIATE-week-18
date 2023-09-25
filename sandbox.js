var character = 'luigi';
var age = 30;
var isBlackBelt = false;
//character = 20 - we can change the value, see the next line, but not the type, if I try to change the type of character, I have an error, but if I change the value, it's working .
character = 'mario'; // ok
//age = 'yoshi' errror: Type 'string' is not assignable to type 'number'
age = 40; // ok
// isBlackBelt = 'yes' -> error : Type 'string' is not assignable to type 'boolean'
isBlackBelt = true; // ok
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));

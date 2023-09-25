// arrays 
let names = [ 'luigi', 'mario','yoshi']
names.push('toad')
//names.push(3) -> error: Argument of type 'number' is not assignable to parameter of type 'string'

let numbers = [10,20,30,40]
numbers.push(25)
// numbers.push('shaun') error: Argument of type 'string' is not assignable to parameter of type 'number'.
// numbers[1]= 'shaun' error: Type 'string' is not assignable to type 'number'.

let mixed = ['ken', 4, 'chun-li',8,9]
mixed.push('ruy')
mixed.push(10)
mixed[0] = 3
// in that case we have mixed arrays, as you can see, it works perfectly, with number, string etc, because it's already mixed types

// objects
let ninja = {
  name:'mario',
  belt: 'black',
  age: 30
}
ninja.age = 40 //ok
ninja.name = 'ruy' //ok
// ninja.age = '30' -> error: Type 'string' is not assignable to type 'number'.
// ninja.skills = ['fighting,sneaking'] error-> Property 'skills' does not exist on type '{ name: string; belt: string; age: number; }'.

ninja = {
  name: 'yoshi',
  belt: 'orange',
  /* age:40 */ // error: Property 'age' is missing in type '{ name: string; belt: string; }' but required in type '{ name: string; belt: string; age: number; }'. if we remove one of the property, we have an error, because we declared it above, and if we want to change them, we need to write every property, no exception.
  age: 40
  //skills:[] -> error: Object literal may only specify known properties, and 'skills' does not exist in type '{ name: string; belt: string; age: number; }'. the same thing, we can't add unknown properties.
}
// explicit types
let character: string
let age: number
let isLoggedIn: boolean

//age: 'luigi'
age = 30

isLoggedIn = true


// arrays
let ninjas: string[] = [] // it's suggested to initialize with empty array, like in this example, because, in case we add for ex. ninjas.push('shaun'), we will not have an error in console, because in that case, if we will not declare an empty array, we don't declare nici un array,si ca si cum, we just inform, that in the future it will be string,but none array is declared

ninjas = ['yoshi','mario']


// union types
let mixed: (string|number|boolean)[] = []
mixed.push('hello')
mixed.push(20)
mixed.push(false)
console.log(mixed)

let uid: string|number 
uid = '123'
uid = 123
// if we write the type in front of an array, we write it in parethesis, but if not, then without


//objects
let ninjaOne: object
ninjaOne = { name:'yoshi', age: 30}

let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
}
ninjaTwo = {
  name:'mario', 
  age:20, 
  beltColour:'black'
}
// FRUNCTION BASICS
/* let greet = () =>{
  console.log('hello, world')
}
greet = 'hello'  */
// Type 'string' is not assignable to type '() => void'
// we can't assign writing the function in that way

let greet: Function
greet = () =>{
  console.log('hello,again')
}
// in that way it works

const add = (a:number,b:number, c: number|string = 10):void =>{
  console.log(a + b)
  console.log(c)
}
add(5,10,'20')
// we can add c?: number|string -> without specifying the default parameter, but in that case in console.log we will see undefined.
// if we add c: number|string = 10, then in this case we specify default parameter, and in console.log we'll see 10
// but if we add add(5,10,'20') the third parameter, even string o number, doesn't matter, it overwrites , and in console.log we'll see 20 
// optional parameters need to be added and the end
// void -> a complete lack of any value ?

const minus = (a:number, b:number) => {
  return a + b
} 
/* const minus = (a:number, b:number):number => {
  return a + b
}  */ // this case :number at the end is optional, because typescript, does it automatically, but sometimes is a good practice to do it
let result = minus(10,7)
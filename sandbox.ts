
// any type

let age: any = 25

age = true
console.log(age)

age = 'hello'
console.log(age)

age = { name: 'luigi'}
console.log(age)

let mixed: any[] = []
mixed.push('mario')
mixed.push(5)
mixed.push(false)
console.log(mixed)

let ninja: { name: any, age: any}
ninja = { name:'yoshi', age: 25}
console.log(ninja)
ninja = { name:25, age: 'yoshi'}
console.log(ninja)
// it can be useful in certain situation, but we need to be careful using any, because it can create errors, like in the example above, the name can't be a number etc.
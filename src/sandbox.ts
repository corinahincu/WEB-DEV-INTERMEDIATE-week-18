// TYPE ALIASES

/* const logDetails = (uid: string | number, item: string) =>{
  console.log(`${item} has a uid of ${uid}`)
}

const greet = (user: {name: string, uid:string | number}) => {
  console.log(`${user.name} says hello`)
}

const greetAgain = (user: {name: string, uid:string | number}) => {
  console.log(`${user.name} says hello`)
} */
// in that case we write the same code over and over again, to go around that we can make our own type aliases, to define them first, and use them as many times we want in different functions :
//  |
//  v

type StringOrNum = string | number
type objWithName = { name: string, uid: StringOrNum}

const logDetails = (uid: StringOrNum, item: string) =>{
  console.log(`${item} has a uid of ${uid}`)
}

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`)
}
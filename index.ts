// me: developer
const f = (argument: number) =>{
  let result = argument + 0.5;
  return result
}

// testing 
// someone : tester
let testValues = [
  { in: 1, out: 1.5 },
  { in: -1, out: -0.5 },
  { in: '1', out: NaN },
];

for( let i=0; i<testValues.length; i++){ // HW1: use .forEach()
  let result = f(testValues[i].in) 
  // error: Argument of type 'string | number' is not assignable to parameter of type 'number'.Type 'string' is not assignable to type 'number'.

  console.log(`test:${i + 1}: ${testValues[i].in} -> ${result},  ` + (result === testValues[i].out ? 'passed': 'failed' ))
}
// HW1:
/* testValues.forEach((test, index) => {
  let result = f(test.in);
  console.log(`test:${index + 1}: ${test.in} -> ${result},  ` + (result === test.out ? 'passed' : 'failed'));
});  */
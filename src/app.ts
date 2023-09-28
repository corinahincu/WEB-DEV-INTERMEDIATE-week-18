// RENDERING AN HTML TEMPLATE

// MODULES
import { Invoice } from './classes/invoice.js'
import { listTemplate } from './classes/listTemplates.js'
import { Payment } from './classes/payment.js'
import { hasFormatter } from './interfaces/hasFormatter.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement 

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#toFrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// list template instance
const ul = document.querySelector('ul')!
const list = new listTemplate(ul)

/* form.addEventListener('submit', (e: Event)=>{
  e.preventDefault()
  
  let doc: hasFormatter
  if(type.value === 'invoice'){
    doc = new Invoice(toFrom.value,details.value,amount.valueAsNumber)
  } else{
    doc = new Payment(toFrom.value,details.value,amount.valueAsNumber)
  }
  list.render(doc,type.value,'end')
}) */

form.addEventListener('submit', (e: Event)=>{
  e.preventDefault()
  // using tuples
  let values: [string,string,number]
  values = [toFrom.value,details.value,amount.valueAsNumber]

  let doc: hasFormatter
  if(type.value === 'invoice'){
    doc = new Invoice(...values)
  } else {
    doc = new Payment(toFrom.value,details.value,amount.valueAsNumber)
  }
  list.render(doc,type.value,'end')
})
// tuples
// are little bit like arrays, we also can define them in square brackets, but there is one major difference, the types of data in each position in a tuple is fixed once it's been initialized

let arr = ['ruy', 25, true]
arr[0] = false 
arr[1] = 'yoshi'
arr = [30,false, 'yoshi']

let tup: [string, number, boolean] = ['ruy', 25, true]
// once each position has been defined , as a type like this, you can't change them around,it can't be anything else, or you'll have an error
tup[0] = 'ken'
/* tup[0] = false  */// error: Type 'boolean' is not assignable to type 'string'.
tup[1] = 30

let student: [ string, number]
student = ['chun', 234]
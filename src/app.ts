// INTERFACES with classes

// MODULES
import { Invoice } from './classes/invoice.js'
import { Payment } from './classes/payment.js'
import { hasFormatter } from './interfaces/hasFormatter.js'

let docOne: hasFormatter
let docTwo: hasFormatter

docOne = new Invoice('yoshi', 'web work', 250)
docTwo = new Payment('mario', 'plumbing work', 200)

// if we want to create an array that only holds object which implements hasFormatter interface, we can do it like this:
let docs: hasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)
console.log(docs)
// in that case, we just restricting what it can go in docs

const invOne = new Invoice('mario', 'work on the mario website', 250)
const invTwo = new Invoice('luigi', 'work on the mario website', 300)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

/* invOne.client = 'yoshi'
invTwo.amount = 400 */
// we change properties in a class
/* console.log(invoices) */

invoices.forEach(inv => {
  console.log(inv.client,inv.amount,inv.format()) // and here
})

const form = document.querySelector('.new-item-form') as HTMLFormElement 

/* console.log(form.children) */

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#toFrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event)=>{
  e.preventDefault()
  
  let doc: hasFormatter
  if(type.value === 'invoice'){
    doc = new Invoice(toFrom.value,details.value,amount.valueAsNumber)
  } else{
    doc = new Payment(toFrom.value,details.value,amount.valueAsNumber)
  }
  console.log(doc)
})





// MODULES
import { Invoice } from './classes/invoice.js'
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

  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber
  )
})





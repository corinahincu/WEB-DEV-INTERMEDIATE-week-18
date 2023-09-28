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

form.addEventListener('submit', (e: Event)=>{
  e.preventDefault()
  
  let doc: hasFormatter
  if(type.value === 'invoice'){
    doc = new Invoice(toFrom.value,details.value,amount.valueAsNumber)
  } else{
    doc = new Payment(toFrom.value,details.value,amount.valueAsNumber)
  }
  list.render(doc,type.value,'end')
})





// THE DOM & TYPE CASTING

// example 1 
/* 1 way:
const anchor = document.querySelector('a')
  if(anchor){
  console.log(anchor.href)
}  */

// 2 way:
const anchor = document.querySelector('a')!
console.log(anchor.href)
// if we a certain the anchor exists in our html file, we can add "!" at the end, and the errors disappears 

// example 2:
/* const form = document.querySelector('form')! 
-> in that case is form element
 */
const form = document.querySelector('.new-item-form') as HTMLFormElement // in that case  .new-item-form is a type element , so we add : as HTMLFormElement, to specify what kind of element. 
// this example is useful because in the first case, we are not sure that it will retrieve the right form element, if we have for example more than one, so the second case, we are more specific.

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



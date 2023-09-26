"use strict";
// THE DOM & TYPE CASTING
// example 1 
/* 1 way:
const anchor = document.querySelector('a')
  if(anchor){
  console.log(anchor.href)
}  */
// 2 way:
const anchor = document.querySelector('a');
console.log(anchor.href);
// if we a certain the anchor exists in our html file, we can add "!" at the end, and the errors disappears 
// example 2:
/* const form = document.querySelector('form')!
-> in that case is form element
 */
const form = document.querySelector('.new-item-form'); // in that case  .new-item-form is a type element , so we add : as HTMLFormElement, to specify what kind of element. 
// this example is useful because in the first case, we are not sure that it will retrieve the right form element, if we have for example more than one, so the second case, we are more specific.
/* console.log(form.children) */
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});

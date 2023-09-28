// RENDERING AN HTML TEMPLATE
// MODULES
import { Invoice } from './classes/invoice.js';
import { listTemplate } from './classes/listTemplates.js';
import { Payment } from './classes/payment.js';
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new listTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS 
// allows us to create reusable blocks of code which can be used with different types
/* const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random()* 100)
  return {...obj,uid} // returnes new obj
} */
/* let docOne = addUID({name:'yoshi', age:40}) */
/* console.log(docOne) */ // result: random UID
/* let docTwo = addUID('hello') */
/* console.log(docOne.name) */ // in that case we have an error, because when we pass in an obj into the function we're not specifying exactly what this obj should be right and it doesn't know when it returns this new obj and what properties were on the obj that we passed in,in other words in doesn't know if a name or age exists on the objects , because we've not said that anywhere, and it's not captured those inside the functions. So we can combat this by using the GENERIC <T>. in that case it works, but we are not specifying that the type should be an object, so in that case we can add also a string, but in case that we don't want that, like in our example, we want to specify that we can add just objects, we can add like this: <T extends object>(obj: T), we can be also more specific, we can specify which type of object it's allowed to be add, for example <T extends {name: string}>(obj: T)
// GENERICS WITH INTERFACES
/* interface Resource<T> {
  uid: number
  resourceName: string
  data: T // we want to make it generic and fle
} */
/* const docThree: Resource<string> = {
  uid: 1,
  resourceName: 'person',
  data: 'shaun'
}  */
/* const docFour: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  data: {name:'shaun'}
}
 */
/* const docFive: Resource<string[]> = {
  uid:2,
  resourceName:'shoppingList',
  data:['bread','milk','toilet rolls']
} */
// ENUMS 
// are special type  in type script, wich allows to store a set of constants or keyword, and associate them with a numeric value
var resourceType;
(function (resourceType) {
    resourceType[resourceType["BOOK"] = 0] = "BOOK";
    resourceType[resourceType["AUTHOR"] = 1] = "AUTHOR";
    resourceType[resourceType["FILM"] = 2] = "FILM";
    resourceType[resourceType["DIRECTOR"] = 3] = "DIRECTOR";
    resourceType[resourceType["PERSON"] = 4] = "PERSON";
})(resourceType || (resourceType = {}));
const docOne = {
    uid: 1,
    resourceType: resourceType.BOOK,
    data: { title: 'name of the wind' }
};
const docTwo = {
    uid: 10,
    resourceType: resourceType.PERSON,
    data: { name: 'yoshi' }
};
console.log(docOne, docTwo);

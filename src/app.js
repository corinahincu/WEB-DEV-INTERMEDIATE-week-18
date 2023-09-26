"use strict";
// PUBLIC , PRIVATE, READONLY
// default behaviour is that class invoice are public, anyone can change it.If we want to make it private, we can add private in front of it. for ex. private details. but in that case obviously we can't acces it outside of the class, i mean we can access it inside of the class, but outside no. But we can access it from format. 
// readonly, means that we can read and access it but we can't change it
class Invoice {
    // 1 way:
    /*   readonly client: string
      private details: string
      public amount: number */
    /*   constructor(c:string,d:string,a:number){
        this.client = c
        this.details = d
        this.amount = a
      } */
    // 2 way: 
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    } // from here
}
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the mario website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
/* invOne.client = 'yoshi'
invTwo.amount = 400 */
// we change properties in a class
/* console.log(invoices) */
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format()); // and here
});
const form = document.querySelector('.new-item-form');
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

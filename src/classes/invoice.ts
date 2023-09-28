import { hasFormatter } from '../interfaces/hasFormatter.js'
// CLASSES
export class Invoice implements hasFormatter{
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ){}
  format(){
    return `${this.client} owes £${this.amount} for ${this.details}`
  } // we have to have this format method, if wwe don't have it, then we have an error
}
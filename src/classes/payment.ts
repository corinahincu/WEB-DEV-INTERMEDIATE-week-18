import { hasFormatter } from '../interfaces/hasFormatter.js'
// CLASSES
export class Payment implements hasFormatter{
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number,
  ){}
  format(){
    return `${this.recipient} is owed £${this.amount} for ${this.details}`
  } // we have to have this format method, if we don't have it, then we have an error
}
import {Product} from './product';

export class Televisions extends Product{
  private size: string;
  public type: string;
  
  constructor(
    id:string,
    name: string,
    price: number,
    inventary: number,
    type: string,
    brand: string,
  ){
    super(id, name, price, inventary, brand);
    this.name = name;
    this.price = price;
    this.inventary = inventary;
    this.type = type;
    this.brand = brand;
  }  
  getDescription(): string {
    return `Televisor: ${this.name} (${this.type} inches)`;
  }
  
  calculateIVA(quantity: number): number {
    const total = this.price * quantity;
    const iva = total * 0.19;
    return iva;
  }
}
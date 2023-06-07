
import {Product} from './product';

export class Computer extends Product implements DescriptionProducts{
  public serial: string;
  public ram: number;
  public operativeSystem: string;
  constructor(
    id:string,
    name: string,
    price: number,
    inventary: number,
    ram: number,
    operativeSystem: string,
    brand: string
  ){
    super(id, name, price, inventary, brand,);
    this.id=id;
    this.name = name;
    this.price = price;
    this.inventary = inventary;
    this.brand = brand;
    this.ram = ram;
    this.operativeSystem = operativeSystem;
      
  }
  getDescription(): string {
    return `Computador: ${this.name} (${this.operativeSystem} )`;
  }
  calculateIVA(quantity: number): number {
    const total = this.price * quantity;
    const iva = total * 0.19;
    return iva;
  }

}
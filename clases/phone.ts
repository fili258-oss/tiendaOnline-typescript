import {Product} from './product';

export class Phone extends Product{
  public model: string;
  private imei: string;  
  public discount: number;

  constructor(
    id:string,
    name: string,
    price: number,
    inventary: number,     
    model: string,
    brand: string,
    imei: string,
    discount: number

  ){
    super(id, name, price, inventary, brand);
    this.name = name;
    this.price = price;
    this.inventary = inventary;
    this.model = model;
    this.brand = brand;
    this.imei = imei;
    this.discount = discount;
    
  }
  getDescription(): string {
    return `Telefono: ${this.brand} ${this.name}`;
  }
  
  calculateIVA(quantity: number): number {
    const total = this.price * quantity;
    const iva = total * 0.19; 
    return iva;
  }

}
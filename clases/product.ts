export class Product {

  public id: string;
  public name: string;
  public price: number;
  protected inventary: number; 
  public brand: string; 
  public quantity:number;  

  constructor(id: string, name: string, price: number, inventary: number, brand: string){
    this.id = id;
    this.name = name;
    this.price = price;
    this.inventary = inventary;
  }

  public getDescription():void{
    throw new Error('Method not implemented');
  }

  public purchase(quantity: number): void {
    if (quantity > this.inventary) {
      console.log(`Not enough stock for ${quantity} productos`);
    } else {
      console.log(`Purchasing ${quantity} products  of ${this.name}`);
      this.inventary -= quantity;
    }
  }

  calculateIVA(quantity: number): number {
    const total = this.price * quantity;
    const iva = total * 0.19;
    return iva;
  }
  
}
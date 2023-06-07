export class Customer {
  public identification: string;
  public name: string;
  private points: number;
  public listOrders:any[];

  constructor(identification: string, name: string, points: number){
    this.identification = identification;
    this.name = name;
    this.points = points;    
  }

  public addOrders(listProductsOrders){
    console.log("Mis pedidos:")
    this.listOrders = listProductsOrders;
    console.table(this.listOrders)
  }

    
}
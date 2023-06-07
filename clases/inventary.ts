export class Inventary{

  public listProducts:any[];

  constructor(){        
    this.listProducts = [];

  }
  
  searchProductAdded(productId){
    return this.listProducts.find((product) => product.id == productId );
  }

  public addToInventary(product,quantity){
    var productEqual = this.searchProductAdded(product.id);
    if(productEqual != null){
      product.inventary += quantity;
    }else{
      product.inventary = quantity;
      this.listProducts.push(product);
    }
                 
  }
  
  public removeToInventary(idProduct){    
    var productFound = this.searchProductAdded(idProduct);
    var indexProduct = this.listProducts.findIndex(object => {
      return object.id == idProduct;
    });

    if(productFound != null){
      this.listProducts.splice(indexProduct, 1);
      console.log(`${productFound.name} eliminado del inventario.`);
    }else{
      console.log("No existe el producto en el inventario");
    }    

  }  

  public listProductsInventary():void{
    if(this.listProducts.length > 0){
      console.log('----- Productos Disponibles -----:');
      console.table(this.listProducts.map((product) => {
        const { quantity, ...productWithoutQuantity } = product;
        return productWithoutQuantity;
      }));
    }else{
      console.log("No hay productos en el inventario")
    }
  }
}
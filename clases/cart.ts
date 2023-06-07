export class Cart implements CouponDisccount{
  
  public productsAdded: any[];
  public productsList: any[];

  constructor(productsList: any[]){        
    this.productsAdded = [];
    this.productsList = productsList;

  }

  searchProductAdded(productId){
    return this.productsAdded.find((product) => product.id == productId );
  }

  queryProductStock(productId){
    return this.productsList.find((product) => product.id == productId );
  }

  calculateTotal(): number {
    let total = 0;
  
    this.productsAdded.forEach((product) => {
      const productIva = product.price * 0.19; 
      const productTotal = (product.price + productIva) * product.quantity;
      total += productTotal;
    });
  
    return total;
  }
  
  public addToCart(product,quantity){
    var productInStock = this.queryProductStock(product.id);
    var productInCart = this.searchProductAdded(product.id);

    if(productInStock != null){      
      if(productInStock.inventary > 0 && quantity <= productInStock.inventary){
        if(productInCart != null){
          product.quantity += quantity;
        }else{
          product.quantity = quantity;
          this.productsAdded.push(product);
        }
        
      }else{
        console.log(`No puedes agregar el ${productInStock.name} ya no hay unidades en stock :(`);
      }
      
    }else{
      console.log(`El producto ${product.name} no existe en nuestro inventario :(`);            
    }
                 
  }
  
  public removeToCart(idProduct){ 
    
    var productFound = this.searchProductAdded(idProduct);
    var indexProduct = this.productsAdded.findIndex(object => {
      return object.id == idProduct;
    });

    if(productFound != null){
      this.productsAdded.splice(indexProduct, 1);      
      console.log(`${productFound.name} eliminado del carrito.`);      
    }else{
      console.log("No existe el producto en el carrito");
    }    

  }

  public listProductsAddedToCart():void{    
    if(this.productsAdded.length != 0){
      console.log('Productos agregados al carrito:');
      console.table(this.productsAdded.map((product) => {
        const { inventary, ...productWithoutInventario } = product;
        return productWithoutInventario;
      }));
      console.log(`Total del carrito: ${this.calculateTotal()}`);
    }else{
      console.log("No hay productos en el carrito");
    }
  }

  public checkoutCart(codeCoupon){    
    
    this.productsList.forEach((productStock)=>{
      this.productsAdded.forEach((productAdded)=>{      
        if(productStock.id == productAdded.id){
          productStock.inventary -= productAdded.quantity
        }
      });

    });   
    
    if(codeCoupon !== ''){
      this.getDisccountAllCart();
      console.log(`Aplicaste cupón: $${this.calculateTotal() - this.getDisccountAllCart()} COP`)
    }else{
      console.log(`Usted ha pagado: $${this.calculateTotal()} COP`)
    }
      
    
  }

  public getDisccountAllCart(){

    var subTotal = 0;
    var discount = 0.20;
    var total = 0;
    subTotal = (discount) * (this.calculateTotal());
    total = this.calculateTotal() - subTotal;
    return total;

  }

}
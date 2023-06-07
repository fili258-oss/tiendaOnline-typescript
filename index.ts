// Import stylesheets
import './style.css';
import {Computer} from './clases/computer';
import {Phone} from './clases/phone';
import {Televisions} from './clases/televisions';
import {Cart} from './clases/cart';
import {Inventary} from './clases/inventary';
import {Customer} from './clases/customer';

//Fill products phone models
const phone1 = new Phone("1", 'POCO', 900000, 0, "2023", "Xiaomi", "12es1", 0.3);
const phone2 = new Phone("2", 'Galaxy K45', 120000, 0, "2023", "Samsung", "13es1", 0.2);
const phone3 = new Phone("3", 'Huawei Y10 Pro', 800000, 0, "2023", "Huawei", "14es1", 0.1);
const phone4 = new Phone("4", 'Moto G25', 670000, 0, "2023", "Motorola", "15es1", 0.5);

//Fill product models computers 
const computer1 = new Computer("5", 'Portatil Hp 14-cf', 1935900, 120, 256, "Windows 10 Home", "hp"); 
const computer2 = new Computer("6", 'Portatil lenovo ',2935900, 94, 256  , " Windows 11 Home","lenovo" );
const computer3 = new Computer("7", "Portatil Asusx415", 1230900, 100, 256  ," Windows 10 Home", "Asus");
const computer4 = new Computer("8", "Portatil vivoBook", 3956900, 61, 512 ," Windows 11 Home",  "Asus");

//We fill model customers
const customer1 = new Customer("1193522332", 'Marino Botina', 0);
const customer2 = new Customer("1085252512", 'Carlos Pereira', 0); 

//We fill the product inventory
const mainInventary = new Inventary();
mainInventary.addToInventary(phone1,120);
mainInventary.addToInventary(phone2,120);
mainInventary.addToInventary(phone4,120);
mainInventary.addToInventary(phone3,620);
//mainInventary.removeToInventary(4);

mainInventary.listProductsInventary();

//Creamos el carrito y pasamos el inventario disponible de productos
const myCart = new Cart(mainInventary.listProducts);
//We add products to our previously created cart
myCart.addToCart(phone1, 100);
myCart.addToCart(phone2, 80);
myCart.addToCart(phone4, 20);
myCart.listProductsAddedToCart();
myCart.removeToCart(4);

myCart.listProductsAddedToCart();



//Calls to purchase methods
myCart.checkoutCart('');
customer1.addOrders(myCart.productsAdded);

mainInventary.listProductsInventary();


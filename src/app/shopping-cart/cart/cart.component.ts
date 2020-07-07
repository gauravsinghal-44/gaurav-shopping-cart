import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartItems = [];

cartTotal = 0;
  cartQty = 0;
  show: boolean = false;

  constructor(private messenger: MessengerService) { }
  ngOnInit() {
    
    this.messenger.getMsg().subscribe((product:any) => {
      console.log('----------------->',product)
      if(product.action == 'delete'){
        this.removeFromcart(product.product);
      }
      else
          this.appProductToCart(product.product);
    });

  }

  appProductToCart(product) {

let productExists = false;

for(let i in this.cartItems) {

      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }

    }

    if(!productExists){
      this.cartItems.push({
            productId : product.id,
           productName : product.brandName,
           qty : 1,
           price : product.Price,
           description : product.ProductName
          }); 
          
    }

     
    this.cartTotal = 0;
     this.cartItems.forEach(item => {
       this.cartTotal += item.qty * item.price;
     });

     this.cartQty = 0;
     this.cartQty = this.cartItems.reduce((acc,item) => 
         acc + item.qty,0);

  }


 removeFromcart(product){
console.log('hi');
  console.log(this.cartItems)
  console.log(product)

  for(let i in this.cartItems){

  
    if(this.cartItems[i].productId == product.id){
     
      
        this.cartItems[i].qty = this.cartItems[i].qty - 1 ;
        if(this.cartItems[i].qty < 1){
            
            let ind = this.cartItems.indexOf(this.cartItems[i]);
          this.cartItems.splice(ind,1);
          
        }
        
  
  }

}
  
    
  

 

console.log('final data ---====>>',this.cartItems)
  this.cartTotal = 0;
  this.cartItems.forEach(item => {
    this.cartTotal += item.qty * item.price;
  });

  this.cartQty = 0;
this.cartQty = this.cartItems.reduce((acc,item) => 
    acc + item.qty,0);
  

 }


  
checkout(){
  this.show  = !this.show;
}
}

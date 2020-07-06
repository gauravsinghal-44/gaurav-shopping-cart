
import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../services/homeService/home.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../services/cart/cart.service';
import { MessengerService } from '../services/messenger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

subscription = new Subscription();
foodlist: any = [{}];
numberofitems: number;
showCount:boolean;
categories;
subcategories;
foodtype;
imageUrl;
status:string;
data:any;

  constructor(private hs: HomeserviceService, private router: Router,
    private fb: FormBuilder, private cartService: CartService, private messenger:MessengerService) { }

  ngOnInit() {
    this.getProducts();
  }


  getProducts(){
    
    let observable = this.hs.fetchData('../assets/products.json')
    observable.subscribe(v => { this.data = v });
  }
  


  handleAddToCart(data){
    let action = 'add';
    this.messenger.sendMsg(data,action);
  }

  handleSubtract(data){
    let action = 'delete';
    this.messenger.sendMsg(data,action);
  }

}

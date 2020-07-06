import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { CheckoutComponent } from './shopping-cart/checkout/checkout.component';
const routes: Routes = [


  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'verify', component: CheckoutComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

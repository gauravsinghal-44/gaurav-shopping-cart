import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { CartItemComponent } from './shopping-cart/cart-item/cart-item.component';
import { environment } from 'src/environments/environment';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    CartItemComponent,
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

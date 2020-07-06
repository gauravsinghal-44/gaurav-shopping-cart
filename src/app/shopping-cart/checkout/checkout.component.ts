import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutData: any = [{}];
  constructor(private messenger: MessengerService) { }

  ngOnInit() {
    this.messenger.getMsg().subscribe((product: any) => {
     console.log(product);
      });

      console.log('=========',this.checkoutData);
  }

}

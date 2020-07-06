import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  constructor() { }

  sendMsg(product,action){
    console.log('hi',product);
    let productAction = {
      'product' : product,
      'action' : action
    }
    this.subject.next(productAction);
  }



  getMsg(){
    return this.subject.asObservable(); 
  }
 
}

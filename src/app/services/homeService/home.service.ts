import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  constructor(private http: HttpClient) { }

  fetchData(url){
   
    return Observable.create(observer => {
                               
      fetch(url)
        .then(res => {  
          return res.json();
        })
        .then(body => {
          observer.next(body);
          observer.complete();
        })
        .catch(err => observer.error(err));
    })
  }

  
}


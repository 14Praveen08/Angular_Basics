import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  constructor() { }
  showdate(){
    let c_date = new Date();
    return c_date;
  }
}

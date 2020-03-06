import { Component } from '@angular/core';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apple';
  tday = new Date();
  obj:Object={fname:"praveen",lname:"kumaar"};
  numbers=[1,2,3,4,5,6,7,8,9];
  price=5000;
}

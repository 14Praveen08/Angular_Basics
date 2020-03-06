import { Component } from '@angular/core';
import {} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'datapassing';
//PARENT TO CHILD
//   counter=5;
//   increase(){
//     this.counter++;
// }
// decrease(){
//   this.counter--;
// }

<app-child [count]=ClickCounter (countChanged)="countChangedHandler($event)"></app-child>`


}

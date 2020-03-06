import { Component } from '@angular/core';
import { FirstserviceService } from './firstservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  date;
  constructor(private service:FirstserviceService, private http:HttpClient){

  }
  ngOnInit(){
    this.date=this.service.showdate();
   this.http.get("http://jsonplaceholder.typicode.com/users")
   
    
  }
}

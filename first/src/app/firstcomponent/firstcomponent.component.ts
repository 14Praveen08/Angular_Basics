import { Component, OnInit } from '@angular/core';
import { FirstserviceService } from '../firstservice.service';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {

  serverID: number = 10;  
  ownumber: number = 20;
  owname: string = "Praveen";
  msg='';
  time;
  onclick(){
    this.msg="HI";
    this.time= this.servicetime.showdate();
  }
  constructor(private servicetime:FirstserviceService) {
    
   }

  ngOnInit() {
    
  }

}

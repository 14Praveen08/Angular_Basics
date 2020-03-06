import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // PARENT TO CHILD
  // @Input() count:number;
  count=5;
  @Output() childcount:EventEmitter<number> = new EventEmitter();
  increase(){
    this.count++;
    this.childcount.emit(this.count);
  }

  decrease(){
    this.count--;
    this.childcount.emit(this.count); 
  }

  constructor() { }

  ngOnInit() {

  }

}

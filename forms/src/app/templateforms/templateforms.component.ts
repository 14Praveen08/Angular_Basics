import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(variable:NgForm){
    console.log(variable.value);
    console.log(variable.value.name);

  }

}

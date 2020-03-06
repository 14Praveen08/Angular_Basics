import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,  } from '@angular/forms';


@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  reactive:FormGroup  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }
  createForm() {
    this.reactive = this.formBuilder.group({
      regno:[''],
      name: [''],
      company:['']
    });
  }
  submit(){
      console.log(this.reactive.value);
  }

}

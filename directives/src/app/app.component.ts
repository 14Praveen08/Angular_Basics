import { Component } from '@angular/core';
import {directors} from './directors.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tab= 0;
  title = 'directives';
  public directors:{title:string, author:string}[] = directors;
}

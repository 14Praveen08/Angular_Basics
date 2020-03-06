import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Ptor } from 'protractor';
import { ExitComponent } from './exit/exit.component';



const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"exit", component: ExitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


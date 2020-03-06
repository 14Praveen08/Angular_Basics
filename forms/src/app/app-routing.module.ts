import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateformsComponent} from './templateforms/templateforms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';



const routes: Routes = [
  {path:"template",component:TemplateformsComponent},
  {path:"reactive",component:ReactiveformsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

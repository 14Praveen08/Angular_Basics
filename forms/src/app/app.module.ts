import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateformsComponent,
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

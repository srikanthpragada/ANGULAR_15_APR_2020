import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms'
import { RegisterComponent } from './forms/register.component';

 
@NgModule({
  declarations: [ 
        RegisterComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [RegisterComponent] 
})
export class AppModule { }

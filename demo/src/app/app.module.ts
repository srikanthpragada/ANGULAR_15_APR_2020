import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LanguagesComponent } from './languages/languages.component';
import { BinddemoComponent } from './binddemo/binddemo.component';

 
@NgModule({
  declarations: [ 
    LanguagesComponent, BinddemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BinddemoComponent] 
})
export class AppModule { }

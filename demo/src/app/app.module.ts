import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LanguagesComponent } from './languages/languages.component';
import { BinddemoComponent } from './binddemo/binddemo.component';
import { DirectivesdemoComponent } from './directivesdemo/directivesdemo.component';

 
@NgModule({
  declarations: [ 
    LanguagesComponent, BinddemoComponent, DirectivesdemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DirectivesdemoComponent] 
})
export class AppModule { }

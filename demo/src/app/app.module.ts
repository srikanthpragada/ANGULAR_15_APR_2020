import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LanguagesComponent } from './languages/languages.component';
import { BinddemoComponent } from './binddemo/binddemo.component';
import { DirectivesdemoComponent } from './directivesdemo/directivesdemo.component';
import { PipesDemoComponent } from './pipes/pipesdemo.component';
import { BracketsPipe } from './pipes/brackets.pipe';

 
@NgModule({
  declarations: [ 
    LanguagesComponent, BinddemoComponent, DirectivesdemoComponent,
    PipesDemoComponent, BracketsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PipesDemoComponent] 
})
export class AppModule { }

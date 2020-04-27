import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { WebBooks2Component } from './http/webbooks2.component.';
import { AddBookComponent } from './http/add-book.component';

@NgModule({
  declarations: [
     WebBooks2Component, AddBookComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [WebBooks2Component, AddBookComponent]
})
export class AppModule { }

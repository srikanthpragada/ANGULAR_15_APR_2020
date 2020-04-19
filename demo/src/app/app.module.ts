import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloComponent } from './hello.component';
import { DiscountComponent } from './discount/discount.component';
 
@NgModule({
  declarations: [ 
    DiscountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DiscountComponent] 
})
export class AppModule { }

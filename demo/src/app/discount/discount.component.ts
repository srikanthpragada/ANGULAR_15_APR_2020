import { Component } from '@angular/core';

@Component({
  selector: 'st-discount',
  templateUrl: './discount.component.html',
})
export class DiscountComponent{
   discount : number = 0 ;

   calculate(price : number, disrate : number) {
       this.discount = price * disrate / 100;
   }

  
}

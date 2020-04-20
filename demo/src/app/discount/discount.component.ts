import { Component } from '@angular/core';

@Component({
  selector: 'st-discount',
  templateUrl: './discount.component.html',
})
export class DiscountComponent{
   discount : number = 0 ;

   calculate(price : number, disrate : number, round : boolean) {
      if(round)
         this.discount = Math.round(price * disrate / 100);
      else
         this.discount = price * disrate / 100;
   }

  
}

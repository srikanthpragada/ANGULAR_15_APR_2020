import { Component, Input , Output, EventEmitter} from '@angular/core';
import { Product } from "./Product"

@Component({
    selector: 'st-product-details',
    templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {
    // input property 
    @Input() product : Product;
    @Input() id : number;

    // event 
    @Output() delete = new EventEmitter<number>();

    deleteProduct() {
        // raise event and pass parameter 
        this.delete.emit(this.id);
    }
}
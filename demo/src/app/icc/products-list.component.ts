import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from "./Product"
@Component({
    selector: 'st-products',
    templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit, OnDestroy{
    products : Product[] =
    [{name: "iPhone 8", price: 80000 , inoffer : true },
    { name: "Google Pixel", price: 60000 , inoffer : true},
    { name: "Samsung S8", price: 70000, inoffer : false }
    ];

    deleteProduct(idx) {
        console.log("Deleting product :" + idx);
        this.products.splice(idx,1);
    }

    constructor() { 
        console.log("Products List Constructor");
    }

    ngOnInit() { 
        console.log("Products List Initialized!");
    }

    ngOnDestroy() { 
        console.log("Products List Destroyed!");
    }

}
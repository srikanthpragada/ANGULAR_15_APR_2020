import { Component, OnInit } from '@angular/core';
import { CounterService } from './CounterService';

@Component({
    selector: 'st-counter',
    templateUrl: './use-counter.component.html'
    // providers : [ CounterService ]
})
export class UseCounterComponent implements OnInit {

    // DI 
    constructor(private counterService : CounterService) { 
         console.log("UseCounterComponent Constructor()")
    }    

    incCounter() {
        this.counterService.inc() 
    }

    decCounter() {
        this.counterService.dec() 
    }

    ngOnInit(): void {
        console.log("UseCounterComponent ngOnInit()")
     }
}

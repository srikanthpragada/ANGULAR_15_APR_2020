import { Component, OnInit } from '@angular/core';
import { CounterService } from './CounterService';

@Component({
    selector: 'st-counter',
    templateUrl: './use-counter.component.html'
    // providers : [ CounterService ]
})
export class UseCounterComponent implements OnInit {

    // DI 
    constructor(private counter : CounterService) { 
         
    }    

    incCounter() {
        this.counter.inc() 
    }

    decCounter() {
        this.counter.dec() 
    }

    ngOnInit(): void { }
}

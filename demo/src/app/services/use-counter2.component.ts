import { Component, OnInit } from '@angular/core';
import { CounterService } from './CounterService';

@Component({
    selector: 'st-counter2',
    templateUrl: './use-counter2.component.html'
    // providers : [ CounterService ]
})
export class UseCounter2Component implements OnInit {

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

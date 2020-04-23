import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'st-second',
    template: `
    <h3>{{message}}</h3>
    <button (click)="raiseEvent()">Click Here </button>
    `
})
export class SecondComponent  {
    @Input() message : string;  // Property
    // Declare event 
    @Output() process = new EventEmitter<string>()
    // constructor() { }
    // ngOnInit(): void { }
    raiseEvent(){
         this.process.emit(this.message)   // raise event 
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-inner',
    template: `<h1>Inner Component</h1>`,
    styles: [``]
})
export class InnerComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}

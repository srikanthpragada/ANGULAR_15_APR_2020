import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-bind',
  templateUrl: './binddemo.component.html',
  styleUrls: ['./binddemo.component.css']
})
export class BinddemoComponent implements OnInit {
  message  : string = "Keep Working!"
  banner : boolean  = true;
  constructor() { }

  ngOnInit(): void {
  }

  showMouse(evt) {
    console.log(evt)
  }

}

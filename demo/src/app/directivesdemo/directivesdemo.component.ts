import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-directives',
  templateUrl: './directivesdemo.component.html',
  styleUrls: ['./directivesdemo.component.css']
})
export class DirectivesdemoComponent implements OnInit {

  styles = {"color" : 'green', "font-size" : '30pt'};

  constructor() { }

  ngOnInit(): void {
  }

}

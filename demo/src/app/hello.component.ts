import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: '<h1>{{message}}</h1>'
})
export class HelloComponent {
  message  = 'Hello Angular';
}   

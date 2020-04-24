import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UseCounterComponent } from './services/use-counter.component';
import { CounterService } from './services/CounterService';
import { UseCounterComponent2 } from './services/use-counter2.component';

 
@NgModule({
  declarations: [ 
        UseCounterComponent, UseCounterComponent2
  ],
  imports: [
    BrowserModule
  ],
  providers: [CounterService],
  bootstrap: [UseCounterComponent, UseCounterComponent2] 
})
export class AppModule { }

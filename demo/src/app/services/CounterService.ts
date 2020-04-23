import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
    counter: number = 0;

    inc() {
        this.counter++;
    }

    dec() {
        if (this.counter > 0)
             this.counter--;
    }

    value() {
        return this.counter;
    }
}


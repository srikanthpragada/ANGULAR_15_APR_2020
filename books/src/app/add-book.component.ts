import { Component, ViewChild } from '@angular/core';
import { Book } from './Book';
import { BookUtils } from './BookUtils';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators'

@Component({
    templateUrl: 'add-book.component.html'
})
export class AddBookComponent {
    book: Book;
    done: boolean;
    added: boolean = false;
    @ViewChild('bookForm') bookForm: FormGroup;

    constructor(private http: HttpClient) {
        this.book = new Book();
    }

    ngOnInit() {
        console.log("Dirty : " + this.bookForm.dirty);
    }

    isDirty() {
        return this.bookForm.dirty && !this.done;
    }

    addBook() {
        // call service 
        this.done = false;
        this.added = false;
        this.http.post(BookUtils.URL, this.book)
            .pipe(
                finalize(() => this.done = true)
            )
            .subscribe(
                _ => {
                       this.added = true
                       this.book = new Book()
                     },
                error => this.handleError(error)
            );
    }

    handleError(error) {
        console.log(error);
        this.added = false;
        return Observable.throw(error);
    }

}
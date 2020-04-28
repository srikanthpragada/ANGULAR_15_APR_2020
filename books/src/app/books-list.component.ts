import { Component } from '@angular/core';
import { Book } from './Book';
import { BookUtils } from './BookUtils';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
    templateUrl: 'books-list.component.html'
})
export class BooksListComponent {
    books: Book[];
    done: boolean;
    constructor(private http: HttpClient, private router: Router) {
        this.books = [];
    }

    ngOnInit() {
        this.done = false;
        this.http.get<Book[]>(BookUtils.URL)
            .pipe(
                finalize(() => this.done = true)
            )
            .subscribe(
                (data: Book[]) => this.books = data   // next 
            );
    }

    deleteBook(id: number) {
        var resp = confirm("Do you want to delete book with id [" + id + "] ?");
        if (resp) {
            this.http.delete(BookUtils.URL + "/" + id)
                .subscribe(
                    _ => 
                    {
                        BookUtils.deleteBook(this.books, id);
                        alert("Book was deleted successfully!")
                    },
                    (ex) => alert("Sorry! Could not delete book!")
                )
        }
    }

    updateBook(id: number) {
        this.router.navigate(["update", id]);
    }

}
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  allBooks!: Book[];
  displayedBooks!: Book[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Book[]>("/books")
      .subscribe(books => this.allBooks = books);
  }

  setDisplayedBooks(books: Book[]): void {
    this.displayedBooks = books;
  }

  trackBook(index: number, book: Book) {
    return book.id;
  }
}

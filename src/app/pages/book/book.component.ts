import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces/Book';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookId!: number;
  book!: Book;

  constructor(
    public languageService: LanguageService,
    public authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.bookId = +(this.route.snapshot.paramMap.get('id') || 0);
    this.http.get<Book>(`/books/${this.bookId}`)
      .subscribe(book => this.book = book);
  }

}

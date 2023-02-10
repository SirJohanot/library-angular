import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/Book';
import { LanguagePipe } from 'src/app/pipes/language.pipe';
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
    private languagePipe: LanguagePipe,
    public authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookId = +(this.route.snapshot.paramMap.get('id') || 0);
    this.http.get<Book>(`/books/${this.bookId}`)
      .subscribe(book => this.book = book);
  }

  handleDelete(): void {
    if (!window.confirm(this.languagePipe.transform('deleteConfirmation'))) {
      return;
    }
    this.http.delete(`/books/${this.bookId}`)
      .subscribe(() => this.router.navigate(['/books']));
  }

}

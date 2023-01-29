import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, NEVER } from 'rxjs';
import { Book } from 'src/app/interfaces/Book';
import { BookDto } from 'src/app/interfaces/BookDto';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  id!: number;

  bookDto: BookDto = {
    title: '',
    authors: '',
    genre: '',
    publisher: '',
    publishmentYear: 2000,
    amount: 1
  }

  error: string = '';

  constructor(
    public languageService: LanguageService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.http.get<Book>(`/books/${this.id}`)
      .subscribe(book => this.bookDto = {
        title: book.title,
        authors: book.authors.map(author => author.name)
          .join(", "),
        genre: book.genre.name,
        publisher: book.publisher.name,
        publishmentYear: book.publishmentYear,
        amount: book.amount
      });
  }

  handleSubmit(book: BookDto) {
    this.http.put(`/books/${this.id}`, book, { observe: 'response' })
      .pipe(
        catchError((error) => {
          switch (error.status) {
            case 400:
              this.error = error?.error?.error;
              break;
            default:
              this.error = 'Could not edit book';
          }
          return NEVER;
        })
      )
      .subscribe(() => {
        this.router.navigate([`/book/${this.id}`]);
      });
  }

}

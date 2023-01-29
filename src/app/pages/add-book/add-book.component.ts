import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, NEVER } from 'rxjs';
import { BookDto } from 'src/app/interfaces/BookDto';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  book: BookDto = {
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

  handleSubmit(book: BookDto) {
    this.http.post("/books", book, { observe: 'response' })
      .pipe(
        catchError((error) => {
          switch (error.status) {
            case 400:
              this.error = error?.error?.error;
              break;
            default:
              this.error = 'Could not add book';
          }
          return NEVER;
        })
      )
      .subscribe(() => {
        this.router.navigate(["/books"]);
      });
  }
}

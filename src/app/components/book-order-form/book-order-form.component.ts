import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, NEVER } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-book-order-form',
  templateUrl: './book-order-form.component.html',
  styleUrls: ['./book-order-form.component.css']
})
export class BookOrderFormComponent {

  @Input() bookId!: number;

  rentalType: string = 'OUT_OF_LIBRARY';
  days: number = 7;

  error: string = '';

  constructor(
    public languageService: LanguageService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  handleSubmit() {
    this.http.post(`/orders/${this.bookId}`,
      {
        rentalType: this.rentalType,
        days: this.days
      },
      { observe: 'response' })
      .pipe(
        catchError((error) => {
          switch (error.status) {
            case 400:
              this.error = error?.error?.error;
              break;
            default:
              this.error = 'Could not place the order';
          }
          return NEVER;
        })
      )
      .subscribe(() => {
        this.router.navigate(["/orders"]);
      });
  }

}

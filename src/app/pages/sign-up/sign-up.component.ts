import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, NEVER } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  login: string = '';
  password: string = '';
  confirmedPassword: string = '';
  firstName: string = '';
  lastName: string = '';
  error: string = '';

  constructor(
    public languageService: LanguageService,
    private http: HttpClient,
    private router: Router
  ) { }

  clearError() {
    this.error = '';
  }

  handleSubmit() {
    this.http.post('/users',
      {
        login: this.login,
        password: this.password,
        confirmedPassword: this.confirmedPassword,
        firstName: this.firstName,
        lastName: this.lastName
      },
      { observe: 'response' })
      .pipe(
        catchError((error) => {
          switch (error.status) {
            case 400:
              this.error = error?.error?.error;
              break;
            default:
              this.error = 'Registration failed';
          }
          return NEVER;
        })
      )
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

}
